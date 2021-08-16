FROM ubi8/ubi:8.3
LABEL description="This is a backend node js container image"
MAINTAINER Yohaan Vakil <yvakil@redhat.com>
COPY package*.json ./

RUN yum install -y nodejs && npm install

# bundle all my code in the image :)
COPY . .

RUN touch public/items

EXPOSE 8000
# ENTRYPOINT npm install && npm run start

CMD ["node", "src/index.js"]