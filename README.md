-INSTAL PACKAGES "run -> npm install"

SCRIPTS USED
"build" -> to compile TS files to JS files into dist Dir
"start" -> run the server 
"dev" -> nodemon the server
"test" -> only test the suites test with jasmine "npm run test"

CREATE .ENV file before u run

PORT=******
POSTGRES_HOST==******
POSTGRES_USER==******
POSTGRES_PASSWORD==******
POSTGRES_DB==******
POSTGRES_DBPort==******
NODE_ENV==******
SALT_ROUNDS==******
BCTYPT_PASSWORD==******
TOKEN==******


APIs examples:
1- for user
(post) create new user -> http://localhost:3000/api/users
(get) a user by his id -> http://localhost:3000/api/users/50     [token required]
(get) all users -> http://localhost:3000/api/users               [token required]
(delete) user by his id -> http://localhost:3000/api/users/50    [token required]

1- for orders
(post) create new order -> http://localhost:3000/api/orders      [token required]
(get) a order by the id -> http://localhost:3000/api/orders/50   [token required]
(get) all orders -> http://localhost:3000/api/orders
(delete) order by its id -> http://localhost:3000/api/orders/50

1- for products
(post) create new product -> http://localhost:3000/api/products       [token required]
(get) a product by the id -> http://localhost:3000/api/products/50
(get) all products -> http://localhost:3000/api/products
(delete) products by its id -> http://localhost:3000/api/products/50  [token required]
