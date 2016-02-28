var overlays = [
  {
    groupName: "Event",
    expanded: false,
    exclusive: true,
    layers: {
      "Main Stage": tyuouLayer,
      "Charity Stage": charityLayer,
      "Station Square": ekimaeLayer,
      "Tent Village": tentomuraLayer,
      "Waku-Waku Market": wakuwakuLayer,
      "Blood Drive": bloodDonationLayer
    }
  },
  {
    groupName: "Parade",
    expanded: false,
    layers: {
      "Central Parade Route": paradeTyuoLayer,
      "Sakura Dori Parade Route ": paradeZenLayer,
      "Goko Parade Route": paradeGokoLayer
    }
  },
  {
    groupName: "Help",
    expanded: false,
    layers: {
      "Main Tent": honbuLayer,
      "3Chome Tent": tent3Layer,
      "4Chome Tent": tent4Layer,
      "5Chome Tent": tent5Layer,
      "Evac. Zone": shelterLayer
    }
  },
  {
    groupName: "Toilets",
    expanded: true,
    layers: {
      "temp. toilets": toiletLayer
    }
  }
];
