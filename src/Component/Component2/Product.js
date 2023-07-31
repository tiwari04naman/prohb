import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Rating from './Rating';
let masterList=[
  {productname: "Monitor",
  url:"image/monitor.webp",
  price:10000,
  disc:"Amazon Basics 23.8 inches IPS Monitor with Borderless Design, FHD 1920 x 1080 Pixels, 16.7 M Colors, with inbuilt Speakers, HDMI & DP Port Connectivity (Black)",
  rating:5,},

  {productname: "Keyboard",
  url:"image/keyboard.webp",
  price:800,
  disc:"Logitech K480 Wireless Multi-Device Keyboard For Windows, Macos, Ipados, Android Or Chrome Os, Bluetooth, Compact, Compatible With Pc, Mac, Laptop, Smartphone, Tablet - Black",
  rating:4,},

  {productname: "Printer",
  url:"image/printer.webp",
  price:15000,
  disc:"HP Deskjet 2723 Printer, Copy, Scan, Dual Band WiFi, Bluetooth, USB, Simple Setup Smart App, Ideal for Home.",
  rating:3,},

  {productname: "Router",
  url:"image/router.webp",
  price:2000,
  disc:"TP-Link AC1200 Mbps Archer A6 Smart WiFi, 5GHz Gigabit Dual Band MU-MIMO Wireless Internet Router, Long Range Coverage by 4 Antennas, Qualcomm Chipset",
  rating:2,}

]
  
export default function Product() {
  return masterList.map((prod)=>{
    return (
      <div class="mt-5 pt-5">
      <div className="col">
        <div className="card">
          <img
            src={prod.url}
            style={{ width: "50%" }}
            className="card-img-top mx-auto"
            alt="logo"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{prod.productname}</h5>
            <h5 className="card-title">{prod.price}</h5>
            <p className="card-text">{prod.disc}</p>
            <Rating value={prod.rating} />
          </div>
        </div>
      </div>
      </div>
    );
  });
}

