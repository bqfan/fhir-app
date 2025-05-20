<h1 align="center">
  <img alt="logo" src="./assets/images/fhir-icon.png" width="124px" style="border-radius:10px"/><br/>
FHIR React Native App </h1>

> This Project is based on [Obytes starter](https://starter.obytes.com)

## Requirements

- [React Native dev environment ](https://reactnative.dev/docs/environment-setup)
- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall), required only for macOS or Linux users
- [Pnpm](https://pnpm.io/installation)
- [Cursor](https://www.cursor.com/) or [VS Code Editor](https://code.visualstudio.com/download) ⚠️ Make sure to install all recommended extension from `.vscode/extensions.json`

## 👋 Quick start

Clone the repo to your machine and install deps :

```sh
git clone https://github.com/bqfan/fhir-app

cd ./fhir-app

pnpm install
```

Copy `env.development.example` as `.env.development` and set `MEDPLUM_CLIENT_ID` in `.env.development` in where `MEDPLUM_CLIENT_ID` can be retrieved from https://app.medplum.com/ClientApplication.

```sh
vim ~/.zshrc
```

To run the app on ios

```sh
pnpm ios
```

To run the app on Android

```sh
pnpm android
```

## 📸 Screen shots

### Splash Screen
<img src="https://github.com/user-attachments/assets/e2884993-dc80-4ad5-b1b5-3d6e460266ea" alt="Splash Screen" width="250" />
<img src="https://github.com/user-attachments/assets/ef6cd8b0-b2f3-47cd-adc4-acf14eccbb81" alt="Splash Screen" width="250" />
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 15 04 15](https://github.com/user-attachments/assets/e2884993-dc80-4ad5-b1b5-3d6e460266ea)
![Screenshot_1747742689](https://github.com/user-attachments/assets/ef6cd8b0-b2f3-47cd-adc4-acf14eccbb81)

### Onboarding Screen
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 15 04 15](https://github.com/user-attachments/assets/6a504da8-2252-432f-8234-ca76b8374bd1)
![Screenshot_1747740392](https://github.com/user-attachments/assets/3b9dad67-7f9a-4168-b316-d127047a949d)

### Login Screen
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 19 53](https://github.com/user-attachments/assets/b104ce47-de0d-431a-95c6-d9324ee6739f)
![Screenshot_1747740392](https://github.com/user-attachments/assets/7d3bfb5a-df40-4e46-86b5-f32978753310)

### Patient List Screen
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 20 20](https://github.com/user-attachments/assets/eb4b4c26-2d34-42a3-9f7c-2dc7ae7044fa)
![Screenshot_1747740458](https://github.com/user-attachments/assets/bcc18bfc-a5e9-4c94-82b0-66dd606912e0)

### Patient Details Screen
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 20 36](https://github.com/user-attachments/assets/b2ffc71a-1be2-48ed-bed5-ddab238a7d51)
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 20 44](https://github.com/user-attachments/assets/b1f39359-2c67-44b0-a2e0-fe0507824cdf)
![Screenshot_1747740478](https://github.com/user-attachments/assets/43e271ad-1a52-464a-9813-c6ef4947d936)
![Screenshot_1747740471](https://github.com/user-attachments/assets/4869094d-160f-43b0-8430-351ca402e390)
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 48](https://github.com/user-attachments/assets/42ce01d8-51ea-4a8f-a44b-3971e2921bdf)
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 44](https://github.com/user-attachments/assets/adfe2d16-0c06-4898-8513-63328c49cd5e)

### Diagnostic Report Screen
![Screenshot_1747740471](https://github.com/user-attachments/assets/d0fbffd2-1133-4841-abbc-0733d548ddd6)
![Screenshot_1747740478](https://github.com/user-attachments/assets/8f845978-ee68-486a-9cca-666bb8e103e2)

### Practitioner List
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 17](https://github.com/user-attachments/assets/e58e17fa-056f-4aa3-873b-a7943c54a5a5)

### Practitioner Screen
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 05](https://github.com/user-attachments/assets/5ac4b6aa-05c3-4e6c-9c91-e7b49e0730d5)

### Organization List
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 09](https://github.com/user-attachments/assets/80289321-35ab-494e-8a01-efb9602d12b2)
![Screenshot_1747740488](https://github.com/user-attachments/assets/6e8cb9d5-ff53-4524-ad44-82c6f29660ce)

### Organization Screen
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 26](https://github.com/user-attachments/assets/8de3ed24-7757-4eef-9066-c6ae5bdcd808)
![Screenshot_1747740495](https://github.com/user-attachments/assets/94b9aa26-ea1b-48be-81ff-5844db2c404b)

### Settings Screen
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 35](https://github.com/user-attachments/assets/c4974996-2c3e-464b-a909-d764cce71110)
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 31](https://github.com/user-attachments/assets/1cf7633a-2b95-4b75-83dc-e58ffa2337e4)
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 39](https://github.com/user-attachments/assets/90b83d8e-01c5-49aa-9d38-5049ce0b3465)


### Dark Theme Screen
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 39](https://github.com/user-attachments/assets/98fcfbbc-0eff-49e5-a732-81300bd492da)
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 44](https://github.com/user-attachments/assets/95023ba1-d2fe-4dba-8593-98d49c183771)
![Simulator Screenshot - iPhone 16 Pro - 2025-05-20 at 14 21 48](https://github.com/user-attachments/assets/462175f2-bee2-4ca8-a24c-d893bbdd02e6)

## ✍️ Documentation

- [Rules and Conventions](https://starter.obytes.com/getting-started/rules-and-conventions/)
- [Project structure](https://starter.obytes.com/getting-started/project-structure)
- [Environment vars and config](https://starter.obytes.com/getting-started/environment-vars-config)
- [UI and Theming](https://starter.obytes.com/ui-and-theme/ui-theming)
- [Components](https://starter.obytes.com/ui-and-theme/components)
- [Forms](https://starter.obytes.com/ui-and-theme/Forms)
- [Data fetching](https://starter.obytes.com/guides/data-fetching)
- [Contribute to starter](https://starter.obytes.com/how-to-contribute/)

## License

[Apache 2.0](LICENSE.txt)

Copyright &copy; Medplum 2025

FHIR&reg; is a registered trademark of HL7.

SNOMED&reg; is a registered trademark of the International Health Terminology Standards Development Organisation.

LOINC&reg; is a registered trademark of Regenstrief Institute, Inc.

DICOM&reg; is the registered trademark of the National Electrical Manufacturers Association (NEMA).

Medplum&reg; is a registered trademark of Orangebot, Inc.
