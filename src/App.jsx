import React, { useState } from 'react';
import {
  ArrowRight,
  CalendarPlus,
  Clock3,
  Copy,
  HandCoins,
  MapPinned,
  Mountain,
  Music2,
  Share2,
  Trophy,
  Users,
} from 'lucide-react';
import StatusFooter from './components/StatusFooter';

const steps = [
  {
    icon: HandCoins,
    title: 'Earn',
    text: 'Post help or take a quick task.',
  },
  {
    icon: Users,
    title: 'Meet',
    text: 'Check who is free. Meet now or later.',
  },
  {
    icon: CalendarPlus,
    title: 'Plan',
    text: 'Create a plan or join one nearby.',
  },
];

const marketingCards = [
  {
    id: 'earn',
    icon: HandCoins,
    title: 'Earn',
    text: 'Need help? Post it. Want money? Take a nearby task.',
    image: 'https://im.whatshot.in/img/2021/Sep/ttmm-cropped-1630671058.jpg?wp=1',
    stat: 'Post help or earn',
  },
  {
    id: 'meet',
    icon: Users,
    title: 'Meet',
    text: 'Check available time, schedule it, then meet.',
    image: 'https://www.gunneboentrancecontrol.com/wp-content/uploads/2025/05/Blog-Header.jpg',
    stat: 'Meet now or later',
  },
  {
    id: 'plan',
    icon: CalendarPlus,
    title: 'Create or join',
    text: 'Create a plan for later, or join one happening now.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1100&q=80',
    stat: 'Join now or later',
  },
];

const visuals = [
  {
    image: '/assests/go-community-concept.png',
    icon: Users,
    title: 'Community pool',
    text: 'Your group can check who is free and start a plan together.',
  },
];

const activityIdeas = [
  {
    title: 'Coffee after class',
    meta: '4 free nearby',
    image: 'https://www.gunneboentrancecontrol.com/wp-content/uploads/2025/05/Blog-Header.jpg',
  },
  {
    title: 'Pickup basketball',
    meta: 'Starts in 30 min',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Quick paid help',
    meta: '$25 near campus',
    image: 'https://im.whatshot.in/img/2021/Sep/ttmm-cropped-1630671058.jpg?wp=1',
  },
];

const nearbyEvents = [
  {
    icon: Music2,
    title: 'Live music tonight',
    meta: '8 going · 0.6 mi',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Mountain,
    title: 'Hiking this Saturday',
    meta: '12 interested',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Trophy,
    title: 'Game day watch party',
    meta: 'Join with friends',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=80',
  },
];

export default function App() {
  const [activeCard, setActiveCard] = useState(marketingCards[0]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand-mark" aria-label="GO Available home">
            <span className="brand-word">GO</span>
            <span className="brand-switch" aria-hidden="true">
              <span />
            </span>
            <span className="brand-sub">Available</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#how">What you can do</a>
            <a href="#market">Earn meet plan</a>
            <a href="#visuals">Product</a>
            <a href="#waitlist">Join list</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero simple-hero">
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">
                <Clock3 size={16} />
                Available soon
              </span>
              <span className="time-joke">Your free time is checking its watch.</span>
              <h1>
                Turn free time into something fun.
              </h1>
              <p className="hero-lede">
                GO Available is an availability app for nearby plans. Earn, meet people,
                create activities, or join what is already happening.
              </p>

              <div className="hero-actions">
                <a className="primary-action" href="#waitlist">
                  Join the coming soon list
                  <ArrowRight size={18} />
                </a>
                <a className="secondary-action" href="#visuals">
                  See community pool
                </a>
              </div>
            </div>

            <div className="hero-preview" aria-label="GO Available app preview">
              <div className="phone-stage">
                <img
                  src="/assests/go-mobile-concept.png"
                  alt="GO Available feed and map preview"
                />
                <div className="preview-label preview-label-feed">
                  <MapPinned size={16} />
                  Nearby plans
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="simple-steps" id="how">
          <div className="container">
            <span className="section-tag center-tag">What is GO?</span>
            <h2>A place to find people who are free now.</h2>
            <div className="step-grid">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="simple-step">
                    <Icon size={25} />
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="market-section" id="market">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">Use GO to</span>
              <h2 className="section-title">Earn, Meet, and Make Plans</h2>
            </div>

            <div className="marketing-card-grid">
              {marketingCards.map((card) => {
                const Icon = card.icon;
                const isActive = activeCard.id === card.id;
                return (
                  <button
                    key={card.id}
                    type="button"
                    className={isActive ? 'marketing-card active' : 'marketing-card'}
                    onClick={() => setActiveCard(card)}
                  >
                    <img src={card.image} alt={`${card.title} preview`} />
                    <span>{card.stat}</span>
                    <h3>
                      <Icon size={23} />
                      {card.title}
                    </h3>
                    <p>{card.text}</p>
                  </button>
                );
              })}
            </div>

            <div className="active-story">
              <img src={activeCard.image} alt={`${activeCard.title} selected preview`} />
              <div>
                <span>How it works</span>
                <h3>{activeCard.title}</h3>
                <p>{activeCard.text}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="visuals-section" id="visuals">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">Product</span>
              <h2 className="section-title">Community Pool</h2>
              <p className="section-subtitle community-subtitle">
                Community makes it easy to see who is available and make plans together.
              </p>
            </div>

            <div className="visual-card-grid">
              {visuals.map((visual) => {
                const Icon = visual.icon;
                return (
                  <article key={visual.title} className="visual-card">
                    <img src={visual.image} alt={`${visual.title} preview`} />
                    <div className="visual-card-copy">
                      <Icon size={22} />
                      <h3>{visual.title}</h3>
                      <p>{visual.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="live-section">
          <div className="container live-grid">
            <article className="share-plan-card">
              <div className="mini-icon">
                <Share2 size={24} />
              </div>
              <span className="section-tag">Create a plan</span>
              <h2>Make a plan. Share the link.</h2>
              <p>
                Invite your group, see who is free, and let people join now or later.
              </p>

              <div className="plan-preview">
                <div>
                  <strong>Basketball at 6</strong>
                  <span>5 going · 2 spots left</span>
                </div>
                <button type="button">
                  <Copy size={16} />
                  goavailable.app/p/basketball
                </button>
              </div>
            </article>

            <article className="nearby-live-card">
              <div className="section-heading compact-heading">
                <span className="section-tag">Nearby now</span>
                <h2 className="section-title">Ideas around you</h2>
              </div>

              <div className="activity-idea-list">
                {activityIdeas.map((idea, index) => (
                  <button key={idea.title} type="button" className="activity-idea">
                    <img src={idea.image} alt={`${idea.title} preview`} />
                    <span className="idea-rank">0{index + 1}</span>
                    <div>
                      <h3>{idea.title}</h3>
                      <p>{idea.meta}</p>
                    </div>
                    <ArrowRight size={18} />
                  </button>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="events-section">
          <div className="container">
            <div className="events-heading">
              <span className="section-tag">Events nearby</span>
              <h2>Join what is happening around you.</h2>
            </div>

            <div className="event-card-grid">
              {nearbyEvents.map((event) => {
                const Icon = event.icon;
                return (
                  <button key={event.title} type="button" className="event-card">
                    <img src={event.image} alt={`${event.title} preview`} />
                    <div className="event-card-copy">
                      <span>
                        <Icon size={18} />
                        Live nearby
                      </span>
                      <h3>{event.title}</h3>
                      <p>{event.meta}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <StatusFooter />
      </main>
    </div>
  );
}
