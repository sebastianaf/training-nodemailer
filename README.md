# training-nodemailer

Training code to use Nodemailer using s running on Docker

## Requirements

- NodeJS
- Docker
- Docker compose

## Steps

### 1. Clone the repository

```shell
git clone https://github.com/sebastianaf/training-nodemailer
cd training-nodemailer
```

### 2. Set environment variables

Create a `.env` from `.env.example` file in the root folder with all environment variables, this variables will be used by the containers, it need to be reached by `docker-compose.yml` file.

### 3. Change `training` and `nodemailer` names [Optional]

It's recommend to change all the names (in `docker-compose.yml`, `Dockerfile`, `package.json` and in this `README.md` file) named with `training` and `nodemailer` with your own organization name and project name.

### 4. Expose the `-ports`

Uncomment the ports flag in `docker-compose.yml` to be able for access the services.

### 5. Run

```shell
docker compose -p training-nodemailer up -d
```

After type and run the command go to `localhost:${API_PORT}`

### 6. Send a email

Try out this `POST` query to `localhost:${API_PORT}/email`

```JSON
{
    "remitterName":"Nodemailer",
	"logoURL":"https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png",
	"recieverEmails":["mail@yours.com"],
	"title":"Notification 🔔",
	"subject":"📨 Email send from Nodemailer",
	"body":"Nodemailer is a module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.<br><br><strong>Sincerely</strong><br>sebastianaf.",
    "footer":"Nodemailer - Powered by EmailEngine",
	"legal":"MIT License | Nodemailer"
}

```
That may looks like this.

![Email preview](https://github.com/sebastianaf/training-nodemailer/blob/main/preview.png?raw=true)

pending image
