var express = require("express");
var router = express.Router();
const si = require("systeminformation");

router.get("/", async (req, res, next) => {
  const cpuData = await si.cpu();
  const osData = await si.osInfo();
  const cpuTempData = await si.cpuTemperature();
  res.json({
    cpu: {
      manufacturer: cpuData.manufacturer,
      cores: cpuData.cores,
      physicalCores: cpuData.physicalCores,
      processors: cpuData.processors,
      speedMin: cpuData.speedmin,
      speedMax: cpuData.speedmax,
    },
    os: {
      platform: osData.platform,
      distro: osData.distro,
      kernel: osData.kernel,
    },
    maxTemp: cpuTempData.max,
  });
});

module.exports = router;
