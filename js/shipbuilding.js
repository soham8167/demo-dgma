/* =========================================================
   DGMA Maritime Portal – Shipbuilding Directory Logic
   ========================================================= */

const shipyardsData = [
  {
    id: 1,
    name: "Cochin Shipyard Limited",
    location: "Kochi, Kerala",
    state: "Kerala",
    type: "Commercial & Defense",
    rating: "4.9",
    capacity: "110,000 DWT",
    docks: "2 Major Docks",
    year: "1972",
    img: "images/hero-bg.png",
    overview: "Cochin Shipyard Limited (CSL) is the premier ship building and maintenance facility in India. CSL built India's first indigenous aircraft carrier INS Vikrant and specializes in commercial tankers, bulk carriers, and naval warships."
  },
  {
    id: 2,
    name: "Mazagon Dock Shipbuilders Limited",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    type: "Defense Sector",
    rating: "4.8",
    capacity: "40,000 DWT",
    docks: "4 Dry Docks",
    year: "1934",
    img: "images/container-cranes.png",
    overview: "Mazagon Dock Shipbuilders Limited (MDL) is India's leading defense shipyard, constructing warships, submarines, destroyers, and stealth frigates for the Indian Navy."
  },
  {
    id: 3,
    name: "Garden Reach Shipbuilders & Engineers",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    type: "Defense Sector",
    rating: "4.7",
    capacity: "25,000 DWT",
    docks: "3 Dry Docks",
    year: "1884",
    img: "images/maritime-training.png",
    overview: "GRSE is a premier warship builder in India, having built over 100 warships ranging from stealth frigates and corvettes to fast patrol vessels for the Indian Navy and Coast Guard."
  },
  {
    id: 4,
    name: "Larsen & Toubro Shipbuilding Limited",
    location: "Kattupalli, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Commercial & Defense",
    rating: "4.8",
    capacity: "60,000 DWT",
    docks: "1 Syncrolift (20,000T)",
    year: "2007",
    img: "images/port-aerial.png",
    overview: "L&T Shipbuilding at Kattupalli features state-of-the-art modular ship construction facilities, specialized in offshore support vessels, defense interceptors, and heavy warship refits."
  },
  {
    id: 5,
    name: "Hindustan Shipyard Limited",
    location: "Visakhapatnam, Andhra Pradesh",
    state: "Andhra Pradesh",
    type: "Commercial & Defense",
    rating: "4.6",
    capacity: "80,000 DWT",
    docks: "2 Covered Slips",
    year: "1941",
    img: "images/ocean-sunset.png",
    overview: "Hindustan Shipyard Limited (HSL) is strategically located on the east coast, providing shipbuilding, submarine retrofitting, and complex offshore structure fabrication."
  },
  {
    id: 6,
    name: "Goa Shipyard Limited",
    location: "Vasco da Gama, Goa",
    state: "Goa",
    type: "Defense Sector",
    rating: "4.7",
    capacity: "15,000 DWT",
    docks: "3 Slipways",
    year: "1957",
    img: "images/lighthouse.png",
    overview: "Goa Shipyard Limited (GSL) designs and builds high-speed patrol craft, offshore patrol vessels, missile boats, and training ships for domestic and international maritime agencies."
  },
  {
    id: 7,
    name: "Reliance Naval and Engineering Limited",
    location: "Pipavav, Gujarat",
    state: "Gujarat",
    type: "Commercial Shipyard",
    rating: "4.5",
    capacity: "400,000 DWT",
    docks: "1 Dry Dock (662m)",
    year: "1997",
    img: "images/ship-recycling.png",
    overview: "Located in Pipavav, RNEL houses one of the largest dry docks in the world, capable of building and repairing VLCCs, offshore rigs, and heavy commercial cargo carriers."
  },
  {
    id: 8,
    name: "Shoft Shipyard Private Limited",
    location: "Bharuch, Gujarat",
    state: "Gujarat",
    type: "Commercial Shipyard",
    rating: "4.4",
    capacity: "12,000 DWT",
    docks: "2 Slipways",
    year: "2002",
    img: "images/maritime-conference.png",
    overview: "Shoft Shipyard specializes in specialized commercial craft, tugboats, barges, pontoon cranes, and inland river transport vessels."
  },
  {
    id: 9,
    name: "Chowgule & Company Shipbuilding",
    location: "Loutulim, Goa",
    state: "Goa",
    type: "Commercial Shipyard",
    rating: "4.5",
    capacity: "7,000 DWT",
    docks: "3 Building Berths",
    year: "1951",
    img: "images/maritime-library.png",
    overview: "Chowgule Shipbuilding builds European-standard general cargo vessels, ice-class bulk carriers, and eco-friendly electric hybrid river freighters."
  },
  {
    id: 10,
    name: "Tebma Shipyards Limited",
    location: "Malpe, Karnataka",
    state: "Karnataka",
    type: "Ship Repair & Heavy",
    rating: "4.3",
    capacity: "10,000 DWT",
    docks: "2 Slipways",
    year: "1984",
    img: "images/ship-navigation.png",
    overview: "Tebma Shipyards, a subsidiary of Cochin Shipyard, specializes in tugboats, harbor craft, dredgers, and offshore supply vessels."
  },
  {
    id: 11,
    name: "Hooghly Dock & Port Engineers",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    type: "Ship Repair & Heavy",
    rating: "4.2",
    capacity: "5,000 DWT",
    docks: "1 Dry Dock",
    year: "1819",
    img: "images/container-cranes.png",
    overview: "One of the oldest shipyards in Asia, Hooghly Dock constructs inland water transport vessels, passenger ferries, and river cargo barges."
  },
  {
    id: 12,
    name: "Veka Shipyards India",
    location: "Dabhol, Maharashtra",
    state: "Maharashtra",
    type: "Commercial Shipyard",
    rating: "4.4",
    capacity: "15,000 DWT",
    docks: "2 Building Slips",
    year: "2008",
    img: "images/port-aerial.png",
    overview: "Veka Shipyards is a Dutch-Indian joint venture facility in Dabhol, building coastal cargo vessels, inland barges, and specialized workboats."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initShipyardDirectory();
  initViewSwitcher();
  initMapPins();
  initProfileModal();
});

/* --- Initialize Directory Grid & Search Filtering --- */
function initShipyardDirectory() {
  const grid = document.getElementById('shipyardsGrid');
  const searchInput = document.getElementById('directorySearchInput');
  const stateFilter = document.getElementById('stateFilter');
  const typeFilter = document.getElementById('typeFilter');
  const resultsCount = document.getElementById('resultsCount');
  const resetBtn = document.getElementById('resetFiltersBtn');

  if (!grid) return;

  function renderGrid(filteredData) {
    grid.innerHTML = '';
    if (resultsCount) resultsCount.textContent = filteredData.length;

    if (filteredData.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: white; border-radius: 16px;">
          <h3 style="font-family: var(--ff-heading); font-size: 20px; color: var(--clr-dark); margin-bottom: 8px;">No Shipyards Found</h3>
          <p style="font-size: 14px; color: var(--clr-muted);">Try adjusting your search criteria or resetting filters.</p>
        </div>
      `;
      return;
    }

    filteredData.forEach(yard => {
      const card = document.createElement('div');
      card.className = 'shipyard-card animate-on-scroll visible';
      card.innerHTML = `
        <div class="shipyard-card-header">
          <img src="${yard.img}" alt="${yard.name}" loading="lazy">
          <span class="shipyard-rating-badge">★ ${yard.rating}</span>
          <span class="shipyard-type-tag">${yard.type}</span>
        </div>
        <div class="shipyard-card-body">
          <h3 class="shipyard-title">${yard.name}</h3>
          <div class="shipyard-location">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 2C7.6 2 4 5.4 4 9.5 4 14.3 12 22 12 22s8-7.7 8-12.5C20 5.4 16.4 2 12 2z"/></svg>
            ${yard.location}
          </div>
          <div class="shipyard-specs-table">
            <div class="spec-item">
              <span>Capacity</span>
              <strong>${yard.capacity}</strong>
            </div>
            <div class="spec-item">
              <span>Dry Docks</span>
              <strong>${yard.docks}</strong>
            </div>
          </div>
          <button class="btn-view-profile" onclick="openShipyardModal(${yard.id})">
            View Profile
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function applyFilters() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const stateVal = stateFilter ? stateFilter.value : 'all';
    const typeVal = typeFilter ? typeFilter.value : 'all';

    const filtered = shipyardsData.filter(yard => {
      const matchesSearch = yard.name.toLowerCase().includes(query) ||
                            yard.location.toLowerCase().includes(query) ||
                            yard.capacity.toLowerCase().includes(query);
      const matchesState = (stateVal === 'all') || (yard.state === stateVal);
      const matchesType = (typeVal === 'all') || (yard.type === typeVal);

      return matchesSearch && matchesState && matchesType;
    });

    renderGrid(filtered);
  }

  searchInput && searchInput.addEventListener('input', applyFilters);
  stateFilter && stateFilter.addEventListener('change', applyFilters);
  typeFilter && typeFilter.addEventListener('change', applyFilters);

  resetBtn && resetBtn.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (stateFilter) stateFilter.value = 'all';
    if (typeFilter) typeFilter.value = 'all';
    renderGrid(shipyardsData);
  });

  // Initial render
  renderGrid(shipyardsData);
}

/* --- Grid View vs Map View Switcher --- */
function initViewSwitcher() {
  const gridBtn = document.getElementById('gridViewBtn');
  const mapBtn = document.getElementById('mapViewBtn');
  const gridView = document.getElementById('shipyardsGrid');
  const mapView = document.getElementById('mapViewContainer');

  if (!gridBtn || !mapBtn || !gridView || !mapView) return;

  gridBtn.addEventListener('click', () => {
    gridBtn.classList.add('active');
    mapBtn.classList.remove('active');
    gridView.style.display = 'grid';
    mapView.style.display = 'none';
  });

  mapBtn.addEventListener('click', () => {
    mapBtn.classList.add('active');
    gridBtn.classList.remove('active');
    gridView.style.display = 'none';
    mapView.style.display = 'grid';
  });
}

/* --- Map View Pins Interactivity --- */
function initMapPins() {
  const pins = document.querySelectorAll('.map-pin');
  const mapTitle = document.getElementById('mapYardTitle');
  const mapDesc = document.getElementById('mapYardDesc');
  const mapDetailsBtn = document.getElementById('mapYardDetailsBtn');

  if (!pins.length) return;

  let currentActiveId = 1;

  pins.forEach(pin => {
    pin.addEventListener('click', () => {
      pins.forEach(p => p.classList.remove('active'));
      pin.classList.add('active');

      const id = parseInt(pin.getAttribute('data-id'));
      currentActiveId = id;
      const yard = shipyardsData.find(y => y.id === id);

      if (yard) {
        if (mapTitle) mapTitle.textContent = yard.name;
        if (mapDesc) mapDesc.textContent = `${yard.overview} Located in ${yard.location}. Max capacity: ${yard.capacity}.`;
      }
    });
  });

  mapDetailsBtn && mapDetailsBtn.addEventListener('click', () => {
    openShipyardModal(currentActiveId);
  });
}

/* --- Profile Detail Modal --- */
function initProfileModal() {
  const modal = document.getElementById('shipyardModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modal) return;

  closeBtn && closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

function openShipyardModal(id) {
  const yard = shipyardsData.find(y => y.id === id);
  if (!yard) return;

  const modal = document.getElementById('shipyardModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalLocation = document.getElementById('modalLocation');
  const modalCapacity = document.getElementById('modalCapacity');
  const modalDocks = document.getElementById('modalDocks');
  const modalYear = document.getElementById('modalYear');
  const modalOverview = document.getElementById('modalOverview');
  const modalImg = document.getElementById('modalImg');

  if (modalTitle) modalTitle.textContent = yard.name;
  if (modalLocation) modalLocation.textContent = `📍 ${yard.location} • ${yard.type}`;
  if (modalCapacity) modalCapacity.textContent = yard.capacity;
  if (modalDocks) modalDocks.textContent = yard.docks;
  if (modalYear) modalYear.textContent = yard.year;
  if (modalOverview) modalOverview.textContent = yard.overview;
  if (modalImg) modalImg.src = yard.img;

  if (modal) modal.classList.add('active');
}
