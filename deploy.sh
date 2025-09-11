echo == LOGGING IN == 
docker login registry.d-sektionen.se
echo == BUILDING ==
docker build -t registry.d-sektionen.se/d-sektionen.se:production -f frontend/Dockerfile.production frontend 
docker build -t registry.d-sektionen.se/d-sektionen.se:staging -f frontend/Dockerfile.staging frontend 
docker build -t registry.d-sektionen.se/strapi:production -f strapi/Dockerfile.production strapi 
docker build -t registry.d-sektionen.se/strapi:staging -f strapi/Dockerfile.staging strapi 
echo == PUSHING ==
docker push registry.d-sektionen.se/d-sektionen.se:production
docker push registry.d-sektionen.se/d-sektionen.se:staging
docker push registry.d-sektionen.se/strapi:production
docker push registry.d-sektionen.se/strapi:staging
echo == RELOADING ==
curl -d "" http://localhost:9000/api/stacks/webhooks/bb4d851a-4e14-474d-a075-654b179acea3
