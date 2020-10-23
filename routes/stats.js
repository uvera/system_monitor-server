var express = require("express");
var router = express.Router();
const si = require("systeminformation");

router.get("/", async (req, res, next) => {
  const cpuData = await si.cpuCurrentspeed();
  const cpuTemperatureData = await si.cpuTemperature();
  const memData = await si.mem();
  const timeData = await si.time();
  res.json({
    uptime: timeData.uptime,
    cpu: {
      speed: {
        average: cpuData.avg,
        cores: cpuData.cores,
      },
      temperature: cpuTemperatureData.main,
    },
    memory: {
        total: memData.total,
        used: memData.used,
        free: memData.free,
        active: memData.active,
    }
  });
});

module.exports = router;
