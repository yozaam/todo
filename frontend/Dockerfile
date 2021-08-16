FROM openshift/nodejs
LABEL description="This is a frontend node js container image"
MAINTAINER Yohaan Vakil <yvakil@redhat.com>
COPY package*.json ./
# bundle all my code in the image :)
COPY . .

# # Give owner rights to the current user, 3 lines to avoid mkdir permission denied 
# RUN chown -Rh node.node .

RUN npm install 

# give all permisions!
RUN chmod node.node .


EXPOSE 3000
# ENTRYPOINT npm install && npm run start

CMD ["npm", "start"]