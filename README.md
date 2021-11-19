# PNP WEB PAGE 

- Update Version 1.2
  - 날짜 : 2021. 11. 19  20:54 
  - 내용 : Update router settings for pages
  - 작성자 : Juwon Kim

- Update Version 1.1
  - 날짜 : 2021. 11. 17  20:54 
  - 내용 : Update router settings for pages
  - 작성자 : Juwon Kim 

- 팀장 : 이지석
- 개발자 : 이지석, 김대원, 김시현, 김주원, 김태우
  - 담당 
    - 이지석 : Leader / Project Manager / Blog Page
    - 김시현 : Main page / Set Router for About, Achievements , Members, Recruit
    - 김대원 : Secretary Staff for Project / Member Page
    - 김주원 : FAQ Page / Set Router for Blog, FAQ
    - 김태우 : Achievements Page


## Checklist for git cloning Project

1. fork 확인 
- PPEB-introduce 폴더를 본인의 계정에 fork 해두시고 수정을 해주세요. 

2. Page 실행
  #### 설치
  1. git을 사용해서 다운로드를 진행합니다.  
  
  ```bash
  git clone #본인의 fork된 프로젝트 url
  ```
  
  #### 실행
  1. npm이나 yarn을 사용해서 필수 모듈들을 설치합니다.

  ```bash
  yarn ## or npm install
  ```

  2. npm이나 yarn을 사용해서 실행합니다.

  ```bash
  yarn start ## or npm start
  ```

  3. 오류가 생길시 
  - craco가 설치가 되지 않은 상태라서 문제가 생겼을 수도 있습니다. 아래와 같은 명령어를 입력해보세요
  ```bash
  yarn add @craco/craco ## npm install @craco/craco
  ```
  
  - 페이지 이동이안되거나 라우터가 제대로 작동하지 않거나 `react-router-dom`에 관해서 문제가 생길 경우 아래 명령어를 실행해보세요. 
  ```bash
  yarn add react-router-dom --save ## npm install react-router-dom --save 
  ```

  이외 다운로드와 관련해서 문제 사항이 있을 경우 Version 1.1 Update를 진행한 김주원에게 연락해주시기 바랍니다.

3. 메인 페이지 업로드 공간 

- src > components > 페이지이름 폴더 
  - 처음 
  - 본인의 페이지를 내용에 추가하면 됩니다.

4. 페이지 업로드 공간

- src > pages > 페이지이름.js
  - Header에 있는 탭을 클릭하거나, 더보기를 눌렀을 때 이동하는 페이지
  - 본인의 페이지를 내용에 추가하면 됩니다.


## Warning 
- 프로젝트를 git clone을 하실 때, 개인 계정에 fork한 뒤 다시 업로드를 하는 방식을 이용해주세요. 
- 버전 업데이트 사항은 소수점 단위를 일씩 증가 시키고, 본인이 한 내용을 추가하여 어떤 내용이 업데이트 되었는지 확인할 수 있도록 해주세요 
- 업데이트 내용을 수정하시기 전에 이전 버전 업데이트 내용은 아래에 `Last Update`에 `Versiton 1.X - 내용 Update by 작성자이름` 순으로 정리해주세요. 

## Last Updates

- Version 1.0 PnP Web site (Main Page) was Updated by Sihyun Kim





### yarn 명령어 사용하시는 분이시고, 관련 명령어가 익숙치 않은 부분을 아래 명령어를 참고해주세요.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
