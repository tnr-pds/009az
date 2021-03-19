import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    padsum:0,
    iphone12sum:0,
  
      IPhoneSE64GBsum:0,
      samsungGalaxyA30ssum: 0,
      samsungGalaxyA01sum: 0,
      samsungGalaxyA50Ssum: 0,
      oppoReno5Pro5Gsum: 0,
      oppoReno4sum: 0,
      oppoA93sum: 0,
      XiaomiMi10TPro5Gsum: 0,
      XiaomiMiA3sum: 0,
      XiaomiRedminote8sum: 0,

    ue:0,
    // // iphon start
    // incart: 1,
    // price: 8990,
    // incart1: 1,
    // price1: 27200,
    // incart2: 1,
    // price2: 12590,
    // // samsung start
    // incart3: 1,
    // price3: 5500,
    // incart4: 1,
    // price4: 2994,
    // incart5: 1,
    // price5: 8420,
    // // oppo start
    // incart6: 1,
    // price6: 19990,
    // incart7: 1,
    // price7: 10990,
    // incart8: 1,
    // price8: 8999,
    // // xiaomi start
    // incart9: 1,
    // price9: 5500,
    // incart10: 1,
    // price10: 2994,
    // incart11: 1,
    // price11: 8420,

    samsung: [
      {
        name: "Samsung",
        version: "Galaxy A30s",
        img:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTp92X8-Kj_MO9VfUgaYHVsNHgwjs-Bnqitfa3Oxytxj_tWEiwiZJUattPML3_y5kfNkRWtIWrmYyS-KroZQmmam73j31ebOSp3caU&usqp=CAY",
        price: 5500,
        about1: " จอแสดงผล Super AMOLED 24-bit (16 ล้านสี)",
        about2: "-หน้าจอหยดน้ำ (Waterdrop Display) กว้าง 6.4 นิ้ว (แนวทะแยง)",
        about3:
          "-ความละเอียด 720 x 1560 พิกเซล (268 ppi) วัสดุรอบตัวเครื่อง Corning Gorilla Glass 3 ระบบเซ็นเซอร์ (Sensor)",
        about4:
          " -ระบบสแกนลายนิ้วมือใต้หน้าจอ (Fingerprint Under Display) ตรวจจับความเคลื่อนไหวของตัวเครื่อง (Accelerometer) ระบบเปิด/ปิดหน้าจออัตโนมัติขณะสนทนา (Proximity)",
        about5:
          "- หน่วยความจำ ROM 64 RAM 4 , แบตเตอรี่ 4,000 mAh , Exynos 7885 Octa Core"
      },
      {
        name: "Samsung",
        version: " Galaxy A01",
        img:
          "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000252358_t.jpg",
        price: 2994,
        about1: "จอแสดงผล IPS TFT 24-bit (16 ล้านสี) ",
        about2:
          "- หน้าจอหยดน้ำ (Waterdrop Display) - กว้าง 5.7 นิ้ว (แนวทะแยง)",
        about3: "- ความละเอียด 720 x 1560 พิกเซล (297 ppi)",
        about4:
          " ระบบเซ็นเซอร์ (Sensor)  ระบบหมุนภาพอัตโนมัติ (Acceleromete ) ตรวจจับแสงปรับความสว่างอัตโนมัติ (Ambient light) ตรวจจับความเคลื่อนไหวของตัวเครื่อง (Accelerometer) ระบบเปิด/ปิดหน้าจออัตโนมัติขณะสนทนา (Proximity)",
        about5:
          "- หน่วยความจำ ROM 16GB  RAM 2GB , แบตเตอรี่ 3,000 mAh , หน่วยประมวลผล : Qualcomm Snapdragon 439 Octa Core"
      },
      {
        name: "Samsung",
        version: "Galaxy A50S ",
        img:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRAhV_kuwybQ4XOqK7CjclGhNyI9SiiVIgJwCYspB9Tz3dl--p1&usqp=CAY",
        price: 8420,
        about1: "จอแสดงผล Super AMOLED 24-bit (16 ล้านสี) ",
        about2: "หน้าจอหยดน้ำ (Waterdrop Display) กว้าง 6.4 นิ้ว (แนวทะแยง) ",
        about3: "ความละเอียด 1080 x 2340 พิกเซล (403 ppi)",
        about4:
          " ระบบเซ็นเซอร์ (Sensor) ระบบสแกนลายนิ้วมือใต้หน้าจอ (Fingerprint Under Display) ตรวจจับความเคลื่อนไหวของตัวเครื่อง (Accelerometer) ระบบเปิด/ปิดหน้าจออัตโนมัติขณะสนทนา (Proximity) ระบบเซนเซอร์หมุนภาพ (Gyroscope)",
        about5:
          "หน่วยความจำ ROM 128GB  RAM 6GB , แบตเตอรี่ 4,000 mAh , หน่วยประมวลผล :Exynos 9611 Octa Core"
      },
      {
        name: "Samsung",
        version: "Galaxy Note 10  ",
        img:
          "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/5/251673_2.jpg",
        price: 20994,
        about1: 'Display: 6.3" FHD+ Dynamic AMOLED ',
        about2: "Front Camera: 10MP Selfie Camera ",
        about3: "Rear Camera: 16MP+12MP+12MP",
        about4: " Rear Camera: 16MP+12MP+12MP",
        about5:
          " หน่วยความจำ ROM 128GB  RAM 8GB , แบตเตอรี่ 4,500 mAh , หน่วยประมวลผล :Qualcomm Snapdragon 855 Octa Core"
      },
      {
        name: "Samsung",
        version: "Galaxy A42 5G  ",
        img:
          "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000262680_sm-a426bzkhthl.jpg",
        price: 10990,
        about1: "จอแสดงผล Super AMOLED 24-bit (16 ล้านสี) ",
        about2:
          "หน้าจอทรงหยดน้ำ รูปตัว U (Infinity U)  หน้าจอหยดน้ำ (Waterdrop Display) กว้าง 6.6 นิ้ว (แนวทะแยง)  ความละเอียด 720 x 1600 พิกเซล (399 ppi) ",
        about3:
          "ระบบเซ็นเซอร์ (Sensor) ระบบตรวจสอบลายนิ้วมือ (Fingerprint) ระบบจดจำใบหน้า (Face Detection) ",
        about4:
          "ระบบหมุนภาพอัตโนมัติ (Accelerometer) ตรวจจับแสงปรับความสว่างอัตโนมัติ (Ambient light)",
        about5:
          " หน่วยความจำ ROM 64GB  RAM 8GB , แบตเตอรี่ 5000 mAh , หน่วยประมวลผล :Qualcomm Snapdragon 750G Octa Core"
      },
      {
        name: "Samsung",
        version: "Galaxy A51  ",
        img:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRU5HQvfh_TRvVPrWAGuwC9AFGqV8Knqy6vtCBkTYDo7NyfchI&usqp=CAY",
        price: 8920,
        about1: "จอแสดงผล Super AMOLED 24-bit (16 ล้านสี)",
        about2:
          " กล้องหน้าฝังบนจอ (Infinity O) จอแสดงผลมีรูสำหรับกล้องหน้า (Punch-Hole Display)  ",
        about3:
          "กว้าง 6.5 นิ้ว (แนวทะแยง) ความละเอียด 1080 x 2400 พิกเซล (405 ppi)",
        about4:
          "ระบบเซ็นเซอร์ (Sensor) ระบบตรวจสอบลายนิ้วมือ (Fingerprint) ระบบหมุนภาพอัตโนมัติ (Accelerometer) ตรวจจับแสงปรับความสว่างอัตโนมัติ (Ambient light)",
        about5:
          " หน่วยความจำ ROM 128GB  RAM 6GB , แบตเตอรี่ 4000 mAh , หน่วยประมวลผล :Exynos 9611 Octa Core"
      }
    ],
    iphone: [
      {
        name: "iphone",
        version: "iPad ใหม่ รุ่น Wifi",
        img:
          "https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/i/p/ipad_wi-fi_10.2_in_gold.png",
        price: 8990,
        about1: " จอภาพ Retina 10.2",
        about2:
          "ชิพ A12 Bionic พร้อมสถาปัตยกรรม 64 บิต พร้อม โปรเซสเซอร์ร่วม M12 ในตัว",
        about3:
          "Wi Fi (802.11a/b/g/n/ac), สองย่านความถี่ (2.4GHz และ 5GHz), HT80",
        about4:
          "แบตเตอรี่ลิเธียมพอลิเมอร์ชนิดชาร์จซ้ำได้ภายในตัวเครื่อง 32.4 วัตต์ต่อชั่วโมง ท่องเว็บผ่าน Wi Fi หรือดูวิดีโอได้นานสูงสุด 10 ชั่วโมง",
        about5: "หน่วยความจำ 	32GB "
      },
      {
        name: "iphone",
        version: "iPhone 12 Pro (256GB)",
        img: "https://dynamic-cdn.eggdigital.com/d8lUtygaD.jpg",
        price: 27200,
        about1:
          "จอภาพ Super Retina XDR จอภาพ OLED ทั้งหน้าจอ ขนาด 6.1 นิ้ว (แนวทแยง)",
        about2:
          "	บันทึกวิดีโอ HDR ในแบบ Dolby Vision สูงสุด 60 fps บันทึกวิดีโอระดับ 4K ที่ 24 fps, 30 fps หรือ 60 fps บันทึกวิดีโอระดับ HD 1080p ที่ 30 fps หรือ 60 fps บันทึกวิดีโอระดับ HD 720p ที่ 30 fps",
        about3:
          "แบตเตอรี่ลิเธียมไอออนชนิดชาร์จซ้ำได้ภายในตัวเครื่อง ชาร์จแบบไร้สายในแบบ MagSafe สูงสุด 15 วัตต์10  ชาร์จแบบไร้สายในแบบ Qi สูงสุด 7.5 วัตต์10",
        about4:
          "ชาร์จได้สูงสุด 50% ในเวลาประมาณ 30 นาที11 ด้วยอะแดปเตอร์ขนาด 20 วัตต์ หรือสูงกว่า",
        about5: "หน่วยความจำ 	256GB  	ชิพ A14 Bionic"
      },
      {
        name: "iphone",
        version: "iPhone SE 64GB (2020)",
        img:
          "https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/s/e/se_wh_3_5.jpg",
        price: 13590,
        about1:
          "จอภาพ Multi‑Touch ไวด์สกรีน แบบ LCD ขนาด 4.7 นิ้ว (แนวทแยง) พร้อมเทคโนโลยี IPS",
        about2:
          "บันทึกวิดีโอระดับ 4K ที่ 24 fps, 30 fps หรือ 60 fps บันทึกวิดีโอระดับ HD 1080p ที่ 30 fps หรือ 60 fps  บันทึกวิดีโอระดับ HD 720p ที่ 30 fps",
        about3:
          "แบตเตอรี่ลิเธียมไอออนชนิดชาร์จซ้ำได้ภายในตัวเครื่อง ชาร์จแบบไร้สาย (ใช้ร่วมกับเครื่องชาร์จ Qi10)",
        about4:
          "ชาร์จได้สูงสุด 50% ใน 30 นาที9 ด้วยอะแดปเตอร์ขนาด 18 วัตต์ หรือสูงกว่า",
        about5: "หน่วยความจำ 	64GB  ชิพ A13 Bionic"
      }
    ],
    oppo: [
      {
        name: "Oppo",
        version: "Reno 5 Pro 5G",
        img: "https://dynamic-cdn.eggdigital.com/uRuDDOFp.jpg",
        price: 19990,
        about1: " หน้าจอขนาด 6.55 นิ้ว ความละเอียด 1080x2400, FHD+,90Hz,",
        about2:
          "4 กล้องหลัง: 64MP(f/1.7) + 8MP(f/2.2) + 2MP(f/2.4) + 2MP(f/2.4) กล้องหน้า: ความละเอียด 44MP(f/2.4)",
        about3: "รองรับ 5G แบบ Dual-mode 5G",
        about4: "รองรับการใช้งาน 2 ซิม (นาโนซิม) แบตเตอรี่ 4,350 mAh",
        about5:
          "หน่วยความจำ RAM 12 GB / ROM 256 GB MediaTek MT6889 Dimensity 1000+ 5G Octa-core 2.6 GHz"
      },
      {
        name: "Oppo",
        version: "Reno 4",
        img: "https://dynamic-cdn.eggdigital.com/ed810lrpN.jpg",
        price: 10990,
        about1: ' หน้าจอขนาด 6.4" ความละเอียด 1080 x 2400, FHD+',
        about2:
          "กล้องหลัง: 4 เลนส์ 48MP(F1.7)+ 8MP(F2.2) + 2MP(F2.4)+ 2MP(F2.4) กล้องหน้า: 1 เลนส์ 32MP (F2.4) + AON Sensor",
        about3: "แบตเตอรี่ 4,015 mAh",
        about4:
          "รองรับการใช้งาน 2 ซิม : Nano Sim (3 Slots : 2 Slot sim1 และ sim2 , 1 slot Micro SD Card)",
        about5:
          "หน่วยความจำ ROM 128GB / RAM 8GB  Qualcomm Snapdragon 720G, Octa-Core, 2.3 GHz"
      },
      {
        name: "Oppo",
        version: "A93",
        img: "https://dynamic-cdn.eggdigital.com/cZAFAexsd.jpg",
        price: 8999,
        about1:
          " หน้าจอ LAMOLED, Punch-hole Display ขนาด 6.43 นิ้ว ความละเอียดระดับ FHD+ (2400x1080 พิกเซล) Refresh Rate 60Hz",
        about2:
          "กล้องหลัง 4 กล้อง กล้องหลัก 48 ล้านพิกเซล, f/1.7  กล้องที่สอง 8 ล้านพิกเซล, f/2.2 กล้องที่สาม 2 ล้านพิกเซล, f/2.4 กล้องที่สี่ 2 ล้านพิกเซล, f/2.4",
        about3: "แบตเตอรี่ 5000mAh",
        about4: "รองรับ 2 ซิม (Nano SIM)",
        about5:
          "หน่วยความจำ 128GB / RAM 8GB รองรับ microSD card เพิ่มได้ถึง 256 GB  MediaTek Helio P95 (MT6779V) Octa-core 2.2 GHz"
      }
    ],
    xiaomi: [
      {
        name: "Xiaomi",
        version: "Mi 10T Pro 5G",
        img: "https://dynamic-cdn.eggdigital.com/c9d0ILmMP.jpg",
        price: 15990,
        about1: "หน้าจอ 144Hz LCD ขนาด 6.67 นิ้ว",
        about2:
          "กล้องหลัง ความละเอียด 108+13+5MP กล้องหน้า ความละเอียด 20 ล้านพิกเซล",
        about3: "รองรับ 5G แบบ Dual-mode 5G รองรับ 2 ซิม (นาโนซิม)",
        about4: "แบตเตอรี่ 5000 mAh",
        about5: "หน่วยความจำ 256 GB / RAM 8 GB Qualcomm Snapdragon 865 (7nm)"
      },
      {
        name: "Xiaomi",
        version: "Mi A3 ",
        img:
          "https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/36/AB/ba7b2915-0e44-460c-ae2f-8ebaa3b269f3.jpg.webp",
        price: 6897,
        about1: "จอแสดงผล Super AMOLED 24-bit (16 ล้านสี)",
        about2:
          "กล้องดิจิตอล 48MP + 8MP (Super wide-angle) + 2MP (Depth Sensor) (Triple Camera)",
        about3:
          "ช่องใส่ซิมการ์ดคู่al Standby (Nano SIM), ช่องเสียบการ์ด 2 รองรับ Nano-SIM Card / TF Card",
        about4: "แบตเตอรี่ 4030 mAh ",
        about5:
          "หน่วยความจำ 64 GB / RAM 4 GB  Snapdragon 665, Octa-core สูงสุด 2.0GHz"
      },
      {
        name: "Xiaomi",
        version: "Redmi note 8",
        img:
          "https://imgaz.staticbg.com/thumb/large/oaupload/ser1/banggood/images/80/8B/12b44626-3bb0-46d3-8db5-5c293a74944f.jpg.webp",
        price: 5990,
        about1: "หน้าจอ 144Hz LCD ขนาด 6.67 นิ้ว",
        about2: "กล้องหลัง Quad: 48.0MP + 8.0MP + 2.0MP + 2.0MP",
        about3: " รองรับ 2 ซิมการ์ด ใช้งาน Nano-SIM",
        about4: "แบตเตอรี่ 4000mAh",
        about5:
          "หน่วยความจำ ROM 64 GB / RAM 4 GB  Snapdragon 665, Octa-core สูงสุด 2.0GHz"
      }
    ]
  },
  getters: {
    samSung: state => {
      return state.samsung;
    },
    iPhone: state => {
      return state.iphone;
    },
    opPo: state => {
      return state.oppo;
    },
    xiaoMi: state => {
      return state.xiaomi;
    },
    addcartsum: state => {
      return state.addcartsum
    },
    ip1: state => {
      return state.ip1
    },
    padsumm: state =>{
      return state.padsum
    },
    iphone12summ: state =>{
      return state.iphone12sum
    },
    IPhoneSE64GBsumm: state =>{
      return state.IPhoneSE64GBsum
    },
      samsungGalaxyA30ssumm: state =>{
        return state.samsungGalaxyA30ssum
      },
      samsungGalaxyA01summ: state =>{
        return state.samsungGalaxyA01sum
      },
      samsungGalaxyA50Ssumm: state =>{
        return state.samsungGalaxyA50Ssum
      },
      oppoReno5Pro5Gsumm: state =>{
        return state.oppoReno5Pro5Gsum
      },
      oppoReno4summ: state =>{
        return state.oppoReno4sum
      },
      oppoA93summ: state =>{
        return state.oppoA93sum
      },
      XiaomiMi10TPro5Gsumm: state =>{
        return state.XiaomiMi10TPro5Gsum
      },
      XiaomiMiA3summ: state =>{
        return state.XiaomiMiA3sum
      },
      XiaomiRedminote8summ: state =>{
        return state.XiaomiRedminote8sum
      },

  },
  mutations: {
    ip1: (state) => {
      state.ip1 += 1
      state.ip1price += 8990
    },
    depad:(state)=>{
      state.price -= 8990
    },

    //-------pad-----
    padadd:(state)=>{
      state.padsum +=8990
    },
    padde:(state)=>{
      state.padsum -=8990
    },
    clspad:(state)=>{
      state.padsum = 0
    },

    //-------iphone12-----
    addiphone12:(state)=>{
      state.iphone12sum +=27200
    },
    deiphone12:(state)=>{
      state.iphone12sum -=27200
    },
    clsiphone12:(state)=>{
      state.iphone12sum = 0
    },

    //------IPhoneSE64GB
    addIPhoneSE64GB:(state)=>{
      state.IPhoneSE64GBsum += 13590
    },
    deIPhoneSE64GB:(state)=>{
      state.IPhoneSE64GBsum -= 13590
    },
    clsIPhoneSE64GB:(state)=>{
      state.IPhoneSE64GBsum = 0 
    },

    //------samsungGalaxyA30s
    addsamsungGalaxyA30s:(state)=>{
      state.samsungGalaxyA30ssum += 5500
    },
    desamsungGalaxyA30s:(state)=>{
      state.samsungGalaxyA30ssum -= 5500
    },
    clssamsungGalaxyA30s:(state)=>{
      state.samsungGalaxyA30ssum = 0 
    },

    //------samsungGalaxyA01
    addsamsungGalaxyA01:(state)=>{
      state.samsungGalaxyA01sum += 2994
    },
    desamsungGalaxyA01:(state)=>{
      state.samsungGalaxyA01sum -= 2994
    },
    clssamsungGalaxyA01:(state)=>{
      state.samsungGalaxyA01sum = 0 
    },

    //------samsungGalaxyA50S
    addsamsungGalaxyA50S:(state)=>{
      state.samsungGalaxyA50Ssum += 8420
    },
    desamsungGalaxyA50S:(state)=>{
      state.samsungGalaxyA50Ssum -= 8420
    },
    clssamsungGalaxyA50S:(state)=>{
      state.samsungGalaxyA50Ssum = 0 
    },

    //------oppoReno5Pro5G
    addoppoReno5Pro5G:(state)=>{
      state.oppoReno5Pro5Gsum += 19990
    },
    deoppoReno5Pro5G:(state)=>{
      state.oppoReno5Pro5Gsum -= 19990
    },
    clsoppoReno5Pro5G:(state)=>{
      state.oppoReno5Pro5Gsum = 0 
    },

    //------oppoReno4
    addoppoReno4:(state)=>{
      state.oppoReno4sum += 10990
    },
    deoppoReno4:(state)=>{
      state.oppoReno4sum -= 10990
    },
    clsoppoReno4:(state)=>{
      state.oppoReno4sum = 0 
    },

    //------oppoA93
    addoppoA93:(state)=>{
      state.oppoA93sum += 8999
    },
    deoppoA93:(state)=>{
      state.oppoA93sum -= 8999
    },
    clsoppoA93:(state)=>{
      state.oppoA93sum = 0 
    },

    //------XiaomiMi10TPro5G
    addXiaomiMi10TPro5G:(state)=>{
      state.XiaomiMi10TPro5Gsum += 15990
    },
    deXiaomiMi10TPro5G:(state)=>{
      state.XiaomiMi10TPro5Gsum -= 15990
    },
    clsXiaomiMi10TPro5G:(state)=>{
      state.XiaomiMi10TPro5Gsum = 0 
    },

    //------XiaomiMiA3
    addXiaomiMiA3:(state)=>{
      state.XiaomiMiA3sum += 6897
    },
    deXiaomiMiA3:(state)=>{
      state.XiaomiMiA3sum -= 6897
    },
    clsXiaomiMiA3:(state)=>{
      state.XiaomiMiA3sum = 0 
    },

    //------XiaomiRedminote8
    addXiaomiRedminote8:(state)=>{
      state.XiaomiRedminote8sum += 5990
    },
    deXiaomiRedminote8:(state)=>{
      state.XiaomiRedminote8sum -= 5990
    },
    clsXiaomiRedminote8:(state)=>{
      state.XiaomiRedminote8sum = 0 
    },

  },
  actions: {},
  modules: {}
});
