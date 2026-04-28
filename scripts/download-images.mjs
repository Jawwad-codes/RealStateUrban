/** @format */

import https from "https";
import fs from "fs";
import path from "path";

const images = [
  // Agents — professional business portraits
  {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    file: "agent-sarah.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    file: "agent-james.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    file: "agent-priya.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    file: "agent-carlos.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    file: "agent-emily.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    file: "agent-marcus.jpg",
  },
  // Properties — distinct types
  {
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
    file: "prop-luxury-exterior.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    file: "prop-modern-house.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    file: "prop-suburban-home.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    file: "prop-pool-home.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
    file: "prop-craftsman.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=80",
    file: "prop-townhouse-row.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    file: "prop-condo-building.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80",
    file: "prop-condo-interior.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
    file: "prop-kitchen-modern.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&q=80",
    file: "prop-living-room.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    file: "prop-master-bedroom.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
    file: "prop-bathroom.jpg",
  },
  // Neighborhoods
  {
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80",
    file: "neighborhood-downtown.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    file: "neighborhood-suburban.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    file: "neighborhood-street.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=900&q=80",
    file: "neighborhood-hills.jpg",
  },
  // Office / Team
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    file: "office-team.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
    file: "office-meeting.jpg",
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      console.log(`EXISTS: ${path.basename(dest)}`);
      resolve();
      return;
    }
    const file = fs.createWriteStream(dest);
    const req = https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`OK: ${path.basename(dest)}`);
        resolve();
      });
    });
    req.on("error", (err) => {
      fs.unlinkSync(dest);
      reject(err);
    });
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error("timeout"));
    });
  });
}

const publicDir = path.resolve("public");
for (const img of images) {
  try {
    await download(img.url, path.join(publicDir, img.file));
  } catch (e) {
    console.log(`FAIL: ${img.file} — ${e.message}`);
  }
}
console.log("All done.");
