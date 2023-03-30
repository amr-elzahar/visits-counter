# Visits Counter

A node js application to count the number of visits to a website.

# Description

The visit counter app is a Node.js application that utilizes Redis as its database to keep track of the number of visits to the website. This application creates two separate Docker containers, one for the Redis database and another for the Node.js app. The Redis container is configured with a bind volume to ensure persistent storage. Additionally, a bash script has been included to create the bind volume path if it does not exist.

# Installation

Before proceeding with the installation process, make sure you have Docker installed on your system. To install Docker, follow the instructions provided in the Docker documentation.

1. Clone this repository to your local machine:

```
git clone https://github.com/amr-elzahar/visits-counter.git
```

2. Navigate to the cloned repository:

```
cd visits-counter
```

3. (Optional)Run the bash script to create a bind volume path (if it does not exist):

```
bash script.sh
```

HINT: Do this step if you got an error when running `docker compose up -d` that tells you that redis-data/ is not found 4. Use Docker Compose to build and run the containers:

```
docker compose up -d
```

# Usage

Once the application is installed and running, you can access the website by navigating to `localhost:3000` in your web browser. Each time the page is accessed, the visit count will increase and be stored in the Redis database.

To stop the containers and remove them, use the following command: `docker compose down`
