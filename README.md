# Trillo

Trillo is a single home page website developed to learn advanced SCSS and Flexbox. It includes sophisticated animations and responsive design, making it a great example of modern web design techniques. This project was created by following the Udemy course [Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass) by [Jonas Schmedtmann](https://x.com/jonasschmedtman) .

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Description

Natour is a learning project that covers:

- **Semantic HTML:** Structuring HTML in a meaningful and accessible way.
- **Inheritance, Cascading, and Value Processing in CSS:** Understanding how CSS rules are applied and inherited.
- **Visual Formatting Model:** Learning about the box model, positioning schemes, and stacking contexts.
- **SCSS (Sass) Preprocessing:** Utilizing SCSS for more powerful and flexible stylesheets.
- **Component-Driven Design:** Breaking down the UI into reusable components.
- **Component-Driven Design:** Breaking down the UI into reusable components.
- **7-1 Pattern:** Organizing SCSS files using the 7-1 pattern for better maintainability.
- **Animations:** Adding engaging animations using SCSS
- **Flexbox Layouts:** Creating layouts with Flexbox and mastering modern CSS layout techniques.
- **Responsive Design:** Ensuring the site looks great on all devices, from desktops to mobile phones.
- **Performance Optimization:** Implementing techniques to improve the loading speed and performance of the website.
- **Feature Queries:** Using CSS feature queries to apply styles based on browser support for specific CSS features.
- **Cross-Browser Compatibility:** Ensuring the site works smoothly across different web browsers.
- **Build Process:** Creating a simple build process to optimize source files using Gulp.

The project includes graphics provided by Jonas Schmedtmann for portfolio purposes.

## Technologies

- HTML5
- SCSS (Sass)
- CSS Flexbox
- Gulp (for minifying CSS and JS files)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Maciej-Staniec/Trillo-Project

   ```

2. Navigate into the project directory:

   ```sh
   cd Trillo-Project
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

## Usage

To build the project, use the following commands:

1. To start the development server:

   - Install the following VS Code extensions: "Live Sass Compiler," "Live Server," and "Prettier - Code formatter."

   - Modify the Live Sass Compiler settings in its JSON configuration file (.json) as shown below:

     ```json
     liveSassCompile.settings.formats": [
     {
       "format": "expanded",
       "extensionName": ".css",
       "savePath": "/src/styles",
       "savePathReplacementPairs": null
     }
     ]
     ```

2. To build the project for production:

- Execute the command in your VS code terminal:

  ```sh
  npm run build:all
  ```

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```sh
   git checkout -b feature-foo.
   ```

3. Commit your changes:

   ```sh
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```sh
   git push origin feature-foo
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

- [Maciej Staniec](https://github.com/Maciej-Staniec/) - GitHub Profile
- [Project Link](https://github.com/Maciej-Staniec/Trillo-Project)
- [LinkedIn](https://www.linkedin.com/in/maciej-staniec/)

## Acknowledgments

- [Jonas Schmedtmann](https://x.com/jonasschmedtman) for the excellent course on [Udemy: Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass)
- The course provided graphics that are used for portfolio purposes.
- Inspiration and code snippets from various open-source projects and articles.
