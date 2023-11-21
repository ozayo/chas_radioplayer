// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>



  // Fetch data from the Sveriges Radio API
  fetch('https://api.sr.se/api/v2/channels?format=json&size=100')
    .then(response => response.json())
    .then(data => {
      // Process the data and create HTML elements
      const stations = data.channels;

      // Select the channels div to append stations
      const channelsDiv = document.getElementById('channels');

       // Select the channel filter dropdown
       const channelFilter = document.getElementById('channelFilter');

       // Function to filter channels based on channel type
      const filterChannels = () => {
        const selectedChannelType = channelFilter.value;

        // Clear existing channels
        channelsDiv.innerHTML = '';



      // Iterate through the stations and create HTML elements
      stations.forEach(station => {
      
        if (selectedChannelType === 'all' || station.channeltype === selectedChannelType) {
        
        const stationDiv = document.createElement('div');
        stationDiv.classList.add('station');
        stationDiv.style.backgroundColor = `#${station.color}` || '#FFFFFF';

        const stationImgDiv = document.createElement('div');
        stationImgDiv.classList.add('stationimg');
        const stationImage = document.createElement('img');
        stationImage.classList.add("stimg")
        stationImage.src = station.image;

        // INFO BOX AREA START
        const infoboxDiv = document.createElement('div');
        infoboxDiv.classList.add('infobox');

        const stationName = document.createElement('h2');
        stationName.textContent = station.name;

        const stationType = document.createElement('h4');
        stationType.textContent = station.channeltype;

        const stationTag = document.createElement('p');
        stationTag.textContent = station.tagline;
       
        const audioElement = document.createElement('audio');
        audioElement.controls = true; // Add controls to the audio element
        audioElement.src = station.liveaudio.url; // Set the audio source

        // INFO BOX AREA END

        // Append elements to the station div
        stationDiv.appendChild(stationImgDiv);
        stationImgDiv.appendChild(stationImage);

        stationDiv.appendChild(infoboxDiv);
        infoboxDiv.appendChild(stationName);
        infoboxDiv.appendChild(stationType);
        infoboxDiv.appendChild(stationTag);
        infoboxDiv.appendChild(audioElement);
        
        // Append the station div to the channels div
        channelsDiv.appendChild(stationDiv);

        }
      });
    };
        // Add event listener to the filter dropdown
        channelFilter.addEventListener('change', filterChannels);
        // Initial render
        filterChannels();
      })
    .catch(error => console.error('Error fetching data:', error));