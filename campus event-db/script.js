const events = [
    {
        id: 1,
        title: "Tech Fest 2026",
        category: "Technical",
        date: "2026-10-15",
        time: "10:00 AM",
        end: "05:00 PM",
        venue: "Auditorium",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
        description: "Explore innovation, participate in hands-on challenges and showcase your skills.",
        spots: 80
    },
    {
        id: 2,
        title: "Cultural Day",
        category: "Cultural",
        date: "2026-10-20",
        time: "02:00 PM",
        end: "06:00 PM",
        venue: "Main Hall",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
        description: "Celebrate talent, creativity and diversity with music, dance and performances.",
        spots: 120
    },
    {
        id: 3,
        title: "Inter-College Sports Meet",
        category: "Sports",
        date: "2026-10-28",
        time: "09:00 AM",
        end: "04:00 PM",
        venue: "Sports Ground",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
        description: "Compete, collaborate and showcase your sportsmanship in an energetic meet.",
        spots: 150
    },
    {
        id: 4,
        title: "AI Innovation Workshop",
        category: "Workshop",
        date: "2026-11-05",
        time: "11:00 AM",
        end: "01:00 PM",
        venue: "Seminar Hall",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
        description: "Learn about artificial intelligence and build a small project with expert guidance.",
        spots: 45
    },
    {
        id: 5,
        title: "Photography Contest",
        category: "Cultural",
        date: "2026-11-12",
        time: "10:00 AM",
        end: "03:00 PM",
        venue: "Open Grounds",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80",
        description: "Capture moments, tell visual stories and share your unique perspective.",
        spots: 60
    },
    {
        id: 6,
        title: "Career Guidance Talk",
        category: "Academic",
        date: "2026-11-18",
        time: "03:00 PM",
        end: "04:30 PM",
        venue: "Auditorium",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80",
        description: "Get practical advice from industry experts about careers, interviews and future skills.",
        spots: 100
    },
    {
        id: 7,
        title: "Web Development Bootcamp",
        category: "Technical",
        date: "2026-11-24",
        time: "09:30 AM",
        end: "01:00 PM",
        venue: "Computer Lab 2",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        description: "Create a responsive website and understand the essentials of HTML, CSS and JavaScript.",
        spots: 35
    },
    {
        id: 8,
        title: "Campus Debate Challenge",
        category: "Academic",
        date: "2026-12-02",
        time: "10:00 AM",
        end: "12:30 PM",
        venue: "Lecture Theatre",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80",
        description: "Share arguments, sharpen your public speaking and explore different points of view.",
        spots: 40
    },
    {
        id: 9,
        title: "Battle of the Bands",
        category: "Cultural",
        date: "2026-12-08",
        time: "04:00 PM",
        end: "07:00 PM",
        venue: "Open-Air Stage",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=80",
        description: "Enjoy live music and cheer for student bands performing original songs and covers.",
        spots: 200
    },
    {
        id: 10,
        title: "Badminton Championship",
        category: "Sports",
        date: "2026-12-12",
        time: "08:30 AM",
        end: "02:00 PM",
        venue: "Indoor Stadium",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80",
        description: "Bring your best game to the campus badminton championship. Singles and doubles welcome.",
        spots: 48
    },
    {
        id: 11,
        title: "Entrepreneurship Meetup",
        category: "Workshop",
        date: "2026-12-16",
        time: "01:00 PM",
        end: "03:00 PM",
        venue: "Innovation Hub",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
        description: "Explore startup ideas, meet aspiring founders and learn how to turn an idea into action.",
        spots: 55
    },
    {
        id: 12,
        title: "Project Expo",
        category: "Technical",
        date: "2026-12-20",
        time: "10:00 AM",
        end: "04:00 PM",
        venue: "Exhibition Centre",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
        description: "Showcase student projects, discover new technologies and exchange ideas with peers.",
        spots: 90
    }
];

// Find an event by its ID
const byId = id =>
    events.find(event => event.id === Number(id)) || events[0];

// Format the event date
const formatDate = value =>
    new Date(value + "T12:00:00").toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

// Event icons
const icon = {
    date: "▦",
    time: "◷",
    venue: "⌖"
};

// Create an event card
function eventCard(event) {
    return `
        <article class="event-card">
            <a class="event-image" href="event-details.html?id=${event.id}">
                <img
                    src="${event.image}"
                    alt="${event.title}"
                    loading="lazy"
                >
                <span class="category-badge badge-${event.category}">
                    ${event.category}
                </span>
            </a>

            <div class="event-content">
                <h3>${event.title}</h3>

                <div class="event-meta">
                    <span>▦ ${formatDate(event.date)}</span>
                    <span>◷ ${event.time}</span>
                    <span>⌖ ${event.venue}</span>
                </div>

                <p>${event.description}</p>

                <div class="card-bottom">
                    <span class="spots">
                        ${event.spots} places available
                    </span>

                    <a
                        class="small-button"
                        href="event-details.html?id=${event.id}"
                    >
                        View details →
                    </a>
                </div>
            </div>
        </article>
    `;
}

// Render event cards
function renderCards(target, list) {
    const element = document.getElementById(target);

    if (element) {
        element.innerHTML = list.length
            ? list.map(eventCard).join("")
            : `
                <div class="empty-state">
                    <h3>No events found</h3>
                    <p>Try another search term or category.</p>
                </div>
            `;
    }
}

// Display featured events
const featured = document.getElementById("featured-events");

if (featured) {
    renderCards("featured-events", events.slice(0, 3));
}

// Event category filtering
let activeCategory = "All";

const allGrid = document.getElementById("all-events");

function filterEvents() {
    if (!allGrid) return;

    const term = (
        document.getElementById("event-search")?.value || ""
    ).trim().toLowerCase();

    const filtered = events.filter(event => {
        const matchesCategory =
            activeCategory === "All" ||
            event.category === activeCategory;

        const matchesSearch = `
            ${event.title}
            ${event.category}
            ${event.venue}
            ${event.description}
        `.toLowerCase().includes(term);

        return matchesCategory && matchesSearch;
    });

    renderCards("all-events", filtered);

    const count = document.getElementById("results-count");

    if (count) {
        count.textContent =
            `Showing ${filtered.length} of ${events.length} events`;
    }
}

// Initialize category filters and search
if (allGrid) {
    const params = new URLSearchParams(location.search);

    activeCategory = params.get("category") || "All";

    if (
        ![
            "All",
            "Technical",
            "Cultural",
            "Sports",
            "Workshop",
            "Academic"
        ].includes(activeCategory)
    ) {
        activeCategory = "All";
    }

    document.querySelectorAll(".filter-pill").forEach(button => {
        button.classList.toggle(
            "selected",
            button.dataset.category === activeCategory
        );

        button.addEventListener("click", () => {
            activeCategory = button.dataset.category;

            document.querySelectorAll(".filter-pill").forEach(item => {
                item.classList.toggle("selected", item === button);
            });

            filterEvents();
        });
    });

    document
        .getElementById("event-search")
        ?.addEventListener("input", filterEvents);

    filterEvents();
}

// Display individual event details
const detail = document.getElementById("event-detail");

if (detail) {
    const params = new URLSearchParams(location.search);
    const event = byId(params.get("id") || 1);

    document.title = `${event.title} | Campus Events`;

    detail.innerHTML = `
        <div class="detail-head">
            <div>
                <img
                    class="detail-hero-img"
                    src="${event.image}"
                    alt="${event.title}"
                >

                <span
                    class="category-badge badge-${event.category}"
                    style="position: static; display: inline-block; margin-top: 18px"
                >
                    ${event.category}
                </span>

                <h1 class="detail-title">${event.title}</h1>

                <p class="detail-description">
                    ${event.description}
                </p>
            </div>

            <aside class="detail-side">
                <h3>Event information</h3>

                <p>
                    <span>▦</span>
                    <span>
                        <strong>Date</strong><br>
                        ${formatDate(event.date)}
                    </span>
                </p>

                <p>
                    <span>◷</span>
                    <span>
                        <strong>Time</strong><br>
                        ${event.time} – ${event.end}
                    </span>
                </p>

                <p>
                    <span>⌖</span>
                    <span>
                        <strong>Venue</strong><br>
                        ${event.venue}
                    </span>
                </p>

                <p>
                    <span>◆</span>
                    <span>
                        <strong>Category</strong><br>
                        ${event.category}
                    </span>
                </p>

                <p>
                    <span>♧</span>
                    <span>
                        <strong>Availability</strong><br>
                        ${event.spots} places available
                    </span>
                </p>

                <a
                    class="button"
                    href="register.html?event=${event.id}"
                >
                    Register for this event →
                </a>
            </aside>
        </div>

        <div class="detail-about">
            <h3>About the event</h3>

            <p>
                ${event.description}
                Join fellow students for a well-organised campus experience.
                Arrive a little early, bring your student ID and be ready
                to learn, connect and participate.
            </p>

            <p>
                All interested students are welcome. Please complete
                the registration form to reserve your place.
            </p>
        </div>
    `;
}

// Display the event schedule
const scheduleBody = document.getElementById("schedule-body");

if (scheduleBody) {
    scheduleBody.innerHTML = events.map(event => `
        <tr>
            <td>${event.title}</td>
            <td>${formatDate(event.date)}</td>
            <td>${event.time}</td>
            <td>${event.venue}</td>
            <td>
                <span class="table-tag badge-${event.category}">
                    ${event.category}
                </span>
            </td>
            <td>
                <a
                    class="small-button"
                    href="event-details.html?id=${event.id}"
                >
                    View
                </a>
            </td>
        </tr>
    `).join("");
}

// Populate the registration dropdown
const registerSelect = document.getElementById("register-event");

if (registerSelect) {
    events.forEach(event => {
        const option = document.createElement("option");

        option.value = event.id;
        option.textContent =
            `${event.title} — ${formatDate(event.date)}`;

        registerSelect.appendChild(option);
    });

    const chosen = new URLSearchParams(location.search).get("event");

    if (
        chosen &&
        events.some(event => event.id === Number(chosen))
    ) {
        registerSelect.value = chosen;
    }
}

// Handle registration form submission
document
    .getElementById("registration-form")
    ?.addEventListener("submit", function (event) {
        event.preventDefault();

        const data = new FormData(this);
        const selected = byId(data.get("event"));
        const message = document.getElementById("form-message");

        message.textContent = `
            Thanks, ${data.get("name")}!
            Your demo registration for ${selected.title} is complete.
            This confirmation has not been sent to a server.
        `;

        this.reset();
    });

// Toggle the mobile navigation menu
document.querySelectorAll(".menu-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const nav = button.parentElement.querySelector(".nav-links");
        const opened = nav.classList.toggle("open");

        button.setAttribute("aria-expanded", String(opened));
    });
});