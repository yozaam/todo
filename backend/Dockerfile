FROM ubi8/ubi:8.3
LABEL description="This is a backend node js container image"
MAINTAINER Yohaan Vakil <yvakil@redhat.com>
COPY package*.json ./

COPY . .

RUN yum install -y nodejs && npm install

RUN mkdir items
RUN chmod -R 777 items

EXPOSE 8000

CMD ["node", "src/index.js"]