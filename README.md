# Import Persons
The project allows the creation and login of users and displaying and importing of persons.

## Backend
C# / Web API (.NET CORE 8) / Entity Framework Core / SQL Server / Open API

## Frontend
React / Next.js / TypeScript / JavaScript / CSS / Tailwind CSS

# Setup
Make sure to have **Node.js** (v22.15.0 LTS), **NPM** (10.9.2), **.NET 8** and both **SQL Server** and **SQL Server Management Studio (SSMS)** (20.2.37.0) installed.
 
Clone the repo and go to the folder *frontend* and run `npm install`. This will install the dependencies.

Run `npm run dev` to start the frontend application. By default it should be running on `localhost` port `3000` and it's important this port is not used by some other process because It's configured in the backend app to allow connections from localhost on port 3000.

In the *sql* folder there are initialization files to be executed (sequentially by their file names) in SSMS for creating the database with its tables. It's important whenever you connect to a database via SSMS that you authenticate via the Windows Authentication. If not, enable this type of authentication on your side or modify the configuration in `appsettings.json`'s `ConnectionStrings` section. 

In your IDE which can handle C# projects, e.g. **Visual Studio** or **JetBrains Rider**, open the backend application by opening the project file `ImportPersons.csproj`. Run it in debug mode.

You can either use the frontend application to communicate with backend or an API platform tool such as **Postman** or **Insomnia**. You can also use *only* the backend application directly via Swagger (Open API) by going to the URL `https://localhost:44311/swagger/index.html`.