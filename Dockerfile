FROM node:18
COPY ["package.json","package-lock.json","/usr/nodemailer/app/"]
WORKDIR /usr/nodemailer/app
RUN npm install
COPY [".","/usr/nodemailer/app/"]
RUN npm run build
EXPOSE ${API_PORT}
CMD ["dist/index.js"]
ENTRYPOINT ["node"]