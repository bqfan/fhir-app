import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { ControlledInput, Text, View } from '@/components/ui';
import { Button, ButtonText } from '@/components/ui/button';

const schema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormValues = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => Promise<void>;
  emailError?: string;
  passwordError?: string;
};

export const LoginForm = ({
  onSubmit,
  emailError,
  passwordError,
}: LoginFormProps) => {
  const { control, handleSubmit, setError } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
  });

  // Set server errors in form
  useEffect(() => {
    if (emailError) {
      setError('email', { message: emailError });
    }
    if (passwordError) {
      setError('password', { message: passwordError });
    }
  }, [emailError, passwordError, setError]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 justify-center p-4">
        <View className="items-center justify-center">
          <Text
            testID="form-title"
            className="pb-6 text-center text-4xl font-bold"
          >
            Sign In
          </Text>

          <Text className="mb-6 max-w-xs text-center text-gray-500">
            Welcome! 👋 This is a demo login screen! Feel free to use any email
            and password to sign in and try it out.
          </Text>
        </View>
        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label="Email"
          error={emailError}
        />
        <ControlledInput
          testID="password-input"
          control={control}
          name="password"
          label="Password"
          placeholder="***"
          secureTextEntry={true}
          error={passwordError}
        />
        <Button
          className="my-2 flex flex-row items-center justify-center rounded-md px-4"
          onPress={handleSubmit(onSubmit)}
          testID="login-button"
        >
          <ButtonText className="ml-2 text-sm font-medium">Login</ButtonText>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};
