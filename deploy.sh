# [work in progress]

oc login -u xfmitf -p 4da8cae9204a4abdb1f3

oc new-project yvakil-auto

oc new-app openshift/nodejs-010-centos7~https://github.com/yozaam/todo/ --context-dir=/frontend 

oc expose service/todo

oc port-forward `oc get pods | awk 'END{print $1}'` 3000:8080 &
