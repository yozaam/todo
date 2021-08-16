FROM openshift/nodejs
LABEL description="This is a frontend node js container image"
MAINTAINER Yohaan Vakil <yvakil@redhat.com>
COPY package*.json ./

# Give owner rights to the current user, 3 lines to avoid mkdir permission denied 
RUN chown -Rh $user:$user /project
USER $user
RUN npm config set unsafe-perm true 

RUN npm install

# bundle all my code in the image :)
COPY . .

EXPOSE 3000
# ENTRYPOINT npm install && npm run start

CMD ["npm", "start"]