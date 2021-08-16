FROM ubi8/ubi:8.3
LABEL description="This is a frontend node js container image"
MAINTAINER Yohaan Vakil <yvakil@redhat.com>
COPY package*.json ./

RUN yum install -y nodejs && npm install

# bundle all my code in the image :)
COPY . .

EXPOSE 3000
# ENTRYPOINT npm install && npm run start

CMD ["npm", "start"]