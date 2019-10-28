# ng-animation
this file is created for animate routes with smooth transitions in angular application, 

# Step 1: Create a new Angular application
Let’s get started with creating a new angular application by typing following command in Terminal.
ng new application-name --style=scss --routing

# Step 2: Setup basic routing
Add component routes in app-routing.module.ts file.
const routes: Routes = [
     { path: 'education', component: EducationComponent },
     { path: 'experience', component: ExperienceComponent },
     { path: 'contact', component: ContactComponent },
];
-------------------------------------------------------------------
Delete everything and add the following code in app.component.html
-------------------------------------------------------------------
<header>
    <a routerLink="home" routerLinkActive="active">Home</a>
    <a routerLink="about" routerLinkActive="active">About</a>
    <a routerLink="contact" routerLinkActive="active">Contact</a>
</header>
<router-outlet></router-outlet>

# Step 3: Add some HTML and CSS
Add dummy content in our components.

<div class="box box1">
    <h1>HOME</h1>
</div>
//*contact.component.html
<div class="box box2">
    <h1>CONTACT</h1>
</div>
//*about.component.html
<div class="box box3">
    <h1>ABOUT</h1>
</div>
