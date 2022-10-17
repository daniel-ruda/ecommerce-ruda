# E-commerce Sport Ruda

This is a sample E-commerce website to excel all the knowledge that was adquired in the React Course. The application uses
a list of Products from a collection in Firebase and displays them into the Home Page. The website renders list stuff to fitness people such as Suplements, accesories, bikes, etc. The application displays the list of item for each category mentioned early and you can get the item's information clicking the item.
You can make an order with the items in your cart, which they were previously seletect in each Item Detail.
On top of that you can take over of your orders generated.

## Import Data

All the products are obtained from a collection in Firebase.

## Live Demonstration

Here are a gift showing the E-commerce website in use. Step by step to make an order:
![Gift](/src/assets/screenshots/ecommerceRuda.gif)

Here are a gift showing the extras sections added to the E-commerce website such as Login and Order. Things yo can do:
* Make a user login to save the data to create an order
* List orders saved in Firebase
* Delete an order and update stock of each item belongs to the order deleted
![Gift](/src/assets/screenshots/extras.gif)

Here are screenshots that show the E-commerce website in use:

**Home Page**
![Home Page](/src/assets/screenshots/itemListContainer.jpg?raw=true "Optional Title")

**Item Detail Page**
![Item Detail Page](/src/assets/screenshots/itemDetailContainer.jpg?raw=true "Optional Title")

**Cart Page**
![Cart Page](/src/assets/screenshots/cart.jpg?raw=true "Cart Page")


**Item Count**
![Item Count](/src/assets/screenshots/itemCount.jpg?raw=true  "Item Count")

**Login Page**
![Login Count](/src/assets/screenshots/login.jpg?raw=true  "Login Page")

**Order Page**
![Order Page](/src/assets/screenshots/order.jpg?raw=true "Order Page")

## Getting Started

To get started  you can simply clone this `ecommerce-ruda` repository and install the dependencies.

Clone the `ecommerce-ruda` repository using git:

```bash
git clone https://github.com/daniel-ruda/ecommerce-ruda.git
cd ecommerce-ruda
```

Install dependencies with this command:
```bash
npm install
```

Run the application with this command:
```bash
npm start
```

## Tech Stack
* React
* Styled Components
* React-Toastify

For styles I decided to use Styled Component to avoid the complexity of others libreries such as BootStrap, Material-UI, etc.
For messages to users, I choose react-toastify, a simple library used to notify success and error events.

