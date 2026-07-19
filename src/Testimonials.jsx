// NOTE: these are paraphrased from the general sentiment of public reviews.
// Swap in verified, permission-cleared quotes from your actual guests before launch.
const testimonials = [
  {
    quote: "This was my first time visiting and I had the smoked oxtails and it came on a bed of jasmine rice and my sides were mac and cheese and Grandma's candy yams. The atmosphere was nice seeing various murals of rappers and athletes.",
    author: "Wayne Wilson"
  },
  {
    quote: "Great atmosphere. Very elegant. Definitely get the mocktails! The presentation is IG worthy and they taste even better! I had the oxtails, they fell off the bone and the truffle mashed potatoes are a star performer. I'll be back!",
    author: "Jasmine Taylor"
  },
  {
    quote: "The murals and overall ambiance were beautiful and made the whole experience feel warm and welcoming. The staff was also very nice and attentive.The Oxtails were good as well 10/10 the truffle mac was very good, the yams were my absolute favorite and tasted just like my grandma’s, and the greens were fresh and tasty. The gumbo was also very good and full of flavor.  Overall, a great meal and a place I’d definitely come back to.",
    author: "Melissa Smith"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section reveal">
      <h2>What Guests Are Saying</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="testimonial-card reveal">
            <p>&ldquo;{t.quote}&rdquo;</p>
            <cite>— {t.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
