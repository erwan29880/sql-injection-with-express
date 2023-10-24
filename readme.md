# sécurisation injection sql avec Express 

Simples vérifications sql côté back-end :  
- helmet 
- classe de vérification de pattern  
- escape-html  

## installation : 

créer un dossier mysqld  

```bash
docker-compose up -d
```

puis créer la table et insérer les données (fichier sql.sql)

```bash
npm install
```

```bash
npm run test
```

```bash
node index.js
```