import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <h1 className="text-[5rem] bg-blue-100 text-blue-700 my-[8vw] text-center capitalize font-bold">
        All about pintrest
      </h1>
      <div className="flex justify-center items-start mx-auto">

      <div className="aboutContainer text-blue-700 text-lg text-start md:w-1/2 w-full px-4 mb-8">
        <h2 className="text-4xl font-semibold my-4">What is Pinterest?</h2>
        <p>
          Pinterest is a visual discovery engine for finding ideas like recipes,
          home and style inspiration, and more.
        </p>
        <p>
          With billions of Pins on Pinterest, you'll always find ideas to spark
          inspiration. When you discover Pins you love, save them to boards to
          keep your ideas organised and easy to find. You can also create Pins
          to share your ideas with other people on Pinterest.
          <br />
          <br />
          You have to meet minimum age requirements to sign up, and we have
          certain protections in place for teens. Learn more about teen safety
          on Pinterest .
        </p>
        <h2 className="text-4xl font-semibold my-4">Browse your home feed</h2>
        <p>
          Your home feed is where you'll find Pins, people and businesses we
          think you'll love, based on your recent activity. We'll also show you
          Pins from the people and boards you choose to follow. <br /><br />
        </p>
        <p>
          You can also search for Pins by typing keywords into the search bar.
          Try typing 'birthday party' in the search bar to see ideas for
          birthday party decorations, party food recipes and birthday gift
          ideas.
        </p>
        <h2 className="text-4xl font-semibold my-4">Discover ideas</h2>
        <p>
          Use the search bar to discover ideas, people and trends. Explore
          suggested topics or search for topics of your own. Tap Profiles on the
          search page to discover creators, people and brands based on your
          search. Use your camera to find ideas relevant to your photos and
          narrow beauty results by skin tone range or hair pattern. <br /><br />
        </p>
        <h2 className="text-4xl font-semibold my-4">Save, share and shop Pins</h2>
        Pins are bookmarks that people use to save content they love on
        Pinterest. Pins can be images, videos or products.
        <p><br />
          Image of a Pin pointing out the different parts of what makes a Pin.
          <br />
          If you click through the Pin, you can visit the website to find out
          how to make it or where to buy it. As you discover Pins you love,
          click the red Save button to save them to your boards. Tried the
          perfect birthday cake recipe? Add a comment to tell people how it went
          or add helpful tips.
          <br /><br />
          Sometimes you'll find a Pin that you know a friend will love. Click
          the share icon to send Pins directly to a friend or group in a message
          to pass the inspiration around. You can also use messages to chat to
          your friends. You can see your messages by clicking the speech
          ellipsis icon on your computer or by tapping the dialogue ellipsis
          icon followed by Messages on your mobile device.
          <br /><br />
          You can also search Pinterest for products to buy. Find a product Pin
          and click it to visit the retailer's website.
        </p>
        <h2 className="text-4xl font-semibold my-4">Create Pins</h2>
        <p>
          Upload an image from your computer or mobile device to create a Pin on
          Pinterest .
          <br /><br />
          You can also create and save Pins from images you find online by
          installing a Pinterest Save extension on your browser. Add a title and
          a description to each Pin you create and a website link if you have
          one.
          <br />
          You can edit a Pin's information at any time and move it to any board.
        </p>
        <h2 className="text-4xl font-semibold my-4">Create boards</h2>
        <p>
          The Pins you save live on your boards. Name your boards and arrange
          them on your profile however you want. Invite other people on
          Pinterest to collaborate on Group boards to find even more ideas.
          <br />
          <br />
          To organise your Pins within boards, create board sections . Add a
          'Decorations' or 'Party games' section to your Birthday party board to
          keep similar ideas in the same place. Organise your Pins however makes
          sense to you.
          <br /><br />
          If you prefer to keep your Pins private or if you're throwing a
          surprise birthday party, you can make your board secret . Only you and
          anyone you invite can see your secret boards.
        </p><br />
        <h2 className="text-4xl font-semibold my-4">View your profile</h2>
        <p>
          Find all the Pins you save, boards you create and Pins you try in your
          profile . You can also see who’s following you and the boards and
          people you follow. Only you can see your secret boards when you view
          your own profile.
        </p>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
