# NestJS Marvel Characters Backend

This is the backend server for the Marvel Characters application. It is built using NestJS and connects to a PostgreSQL database to store Marvel character details.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)


## Contributing

Contributions are always welcome! Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

To fork this Project
- Create your Feature Branch (git checkout -b feature/NewFeature)
- Commit your Changes (git commit -m 'Added some new feature')
- Push to the Branch (git push origin feature/NewFeature)
- Open a Pull Request

## Run Locally

Clone the project

```bash
  git clone https://github.com/toubhie/marvel-backend.git
```

Go to the project directory

```bash
  cd marvel-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```

Access Swagger documentation

```bash
  http://localhost:3000/api/docs
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

#### Update accomplices

```http
  PUT /api/characters/:id/update-accomplices
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `uuid` | **Required**. characters id |

This endpoint updates the accomplices for a particular character


## Entity Relationship Diagram

![App Screenshot](https://i.ibb.co/q59MbFj/marvel-backend.png)


## Authors

- [Tobiloba Williams](https://github.com/toubhie)

