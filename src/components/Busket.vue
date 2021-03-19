<template>
  <div class="basket">
    <div class="youcart"><h5>ตะกร้าของคุณ</h5></div>
    <div class="card-product">
      <table>
        <tr>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
        </tr>

        <tr v-for="(item, key) in textList" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>
            {{ item.name }}
            {{ item.version }}
          </td>
          <td>
            <i class="fa fa-plus-square" @click="item.countped++, padadd()"></i>
            <div id="pr">{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, padde()"
            ></i>
          </td>
          <td id="to">{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls(), clspad()"></i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListiphone12" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addiphone12()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, deiphone12()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls1(), clsiphone12()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListIPhoneSE64GB" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addIPhoneSE64GB()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, deIPhoneSE64GB()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls2(), clsIPhoneSE64GB()">
            </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListsamsungGalaxyA30s" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addsamsungGalaxyA30s()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, desamsungGalaxyA30s()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i
              class="fa fa-times-circle"
              @click="cls3(), clssamsungGalaxyA30s()"
            >
            </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListsamsungGalaxyA01" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addsamsungGalaxyA01()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, desamsungGalaxyA01()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i
              class="fa fa-times-circle"
              @click="cls4(), clssamsungGalaxyA01()"
            >
            </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListsamsungGalaxyA50S" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addsamsungGalaxyA50S()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, desamsungGalaxyA50S()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i
              class="fa fa-times-circle"
              @click="cls5(), clssamsungGalaxyA50S()"
            >
            </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListoppoReno5Pro5G" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addoppoReno5Pro5G()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, deoppoReno5Pro5G()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls6(), clsoppoReno5Pro5G()">
            </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListoppoReno4" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addoppoReno4()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, deoppoReno4()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls7(), clsoppoReno4()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListoppoA93" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addoppoA93()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, deoppoA93()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls8(), clsoppoA93()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListXiaomiMi10TPro5G" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addXiaomiMi10TPro5G()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, deXiaomiMi10TPro5G()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i
              class="fa fa-times-circle"
              @click="cls9(), clsXiaomiMi10TPro5G()"
            >
            </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListXiaomiMiA3" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addXiaomiMiA3()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, deXiaomiMiA3()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls10(), clsXiaomiMiA3()">
            </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListXiaomiRedminote8" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i
              class="fa fa-plus-square"
              @click="item.countped++, addXiaomiRedminote8()"
            ></i>
            <div>{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--, deXiaomiRedminote8()"
            ></i>
          </td>
          <td>{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i
              class="fa fa-times-circle"
              @click="cls11(), clsXiaomiRedminote8()"
            >
            </i>
          </td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td>TOTAL</td>
          <td class="total">
            {{
              padsumm +
              iphone12summ +
              IPhoneSE64GBsumm +
              samsungGalaxyA30ssumm +
              samsungGalaxyA01summ +
              samsungGalaxyA50Ssumm +
              oppoReno5Pro5Gsumm +
              oppoReno4summ +
              oppoA93summ +
              XiaomiMi10TPro5Gsumm +
              XiaomiMiA3summ +
              XiaomiRedminote8summ
            }}
          </td>
        </tr>
      </table>

      <!-- <button class="buy-buttons" >Accept</button>
      <button class="buy-buttons" onClick="javascipt:location.reload()">
        Cancel
      </button> -->
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "padsumm",
      "iphone12summ",
      "IPhoneSE64GBsumm",
      "samsungGalaxyA30ssumm",
      "samsungGalaxyA01summ",
      "samsungGalaxyA50Ssumm",
      "oppoReno5Pro5Gsumm",
      "oppoReno4summ",
      "oppoA93summ",
      "XiaomiMi10TPro5Gsumm",
      "XiaomiMiA3summ",
      "XiaomiRedminote8summ",
    ]),
  },
  data: function () {
    return {
      textList: [],
      textListiphone12: [],
      textListIPhoneSE64GB: [],
      textListsamsungGalaxyA30s: [],
      textListsamsungGalaxyA01: [],
      textListsamsungGalaxyA50S: [],
      textListoppoReno5Pro5G: [],
      textListoppoReno4: [],
      textListoppoA93: [],
      textListXiaomiMi10TPro5G: [],
      textListXiaomiMiA3: [],
      textListXiaomiRedminote8: [],
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        //ให้แสดง ชื่อ รูป e-mail
        this.namee = user.displayName;
        // this.email = user.email
        // this.photoUrl = user.photoURL
      } else {
        // No user is signed in.
        //กลับไปหน้า login
        this.$router.replace("/login");
      }
    });
  },
  methods: {
    //------ped
    padadd() {
      this.$store.commit("padadd");
    },
    padde() {
      this.$store.commit("padde");
    },
    clspad() {
      this.$store.commit("clspad");
    },

    //------iphone12
    addiphone12() {
      this.$store.commit("addiphone12");
    },
    deiphone12() {
      this.$store.commit("deiphone12");
    },
    clsiphone12() {
      this.$store.commit("clsiphone12");
    },

    //------IPhoneSE64GB
    addIPhoneSE64GB() {
      this.$store.commit("addIPhoneSE64GB");
    },
    deIPhoneSE64GB() {
      this.$store.commit("deIPhoneSE64GB");
    },
    clsIPhoneSE64GB() {
      this.$store.commit("clsIPhoneSE64GB");
    },

    //------samsungGalaxyA30s
    addsamsungGalaxyA30s() {
      this.$store.commit("addsamsungGalaxyA30s");
    },
    desamsungGalaxyA30s() {
      this.$store.commit("desamsungGalaxyA30s");
    },
    clssamsungGalaxyA30s() {
      this.$store.commit("clssamsungGalaxyA30s");
    },

    //------samsungGalaxyA01
    addsamsungGalaxyA01() {
      this.$store.commit("addsamsungGalaxyA01");
    },
    desamsungGalaxyA01() {
      this.$store.commit("desamsungGalaxyA01");
    },
    clssamsungGalaxyA01() {
      this.$store.commit("clssamsungGalaxyA01");
    },

    //------samsungGalaxyA50S
    addsamsungGalaxyA50S() {
      this.$store.commit("addsamsungGalaxyA50S");
    },
    desamsungGalaxyA50S() {
      this.$store.commit("desamsungGalaxyA50S");
    },
    clssamsungGalaxyA50S() {
      this.$store.commit("clssamsungGalaxyA50S");
    },

    //------oppoReno5Pro5G
    addoppoReno5Pro5G() {
      this.$store.commit("addoppoReno5Pro5G");
    },
    deoppoReno5Pro5G() {
      this.$store.commit("deoppoReno5Pro5G");
    },
    clsoppoReno5Pro5G() {
      this.$store.commit("clsoppoReno5Pro5G");
    },

    //------oppoReno4
    addoppoReno4() {
      this.$store.commit("addoppoReno4");
    },
    deoppoReno4() {
      this.$store.commit("deoppoReno4");
    },
    clsoppoReno4() {
      this.$store.commit("clsoppoReno4");
    },

    //------oppoA93
    addoppoA93() {
      this.$store.commit("addoppoA93");
    },
    deoppoA93() {
      this.$store.commit("deoppoA93");
    },
    clsoppoA93() {
      this.$store.commit("clsoppoA93");
    },

    //------XiaomiMi10TPro5G
    addXiaomiMi10TPro5G() {
      this.$store.commit("addXiaomiMi10TPro5G");
    },
    deXiaomiMi10TPro5G() {
      this.$store.commit("deXiaomiMi10TPro5G");
    },
    clsXiaomiMi10TPro5G() {
      this.$store.commit("clsXiaomiMi10TPro5G");
    },

    //------XiaomiMiA3
    addXiaomiMiA3() {
      this.$store.commit("addXiaomiMiA3");
    },
    deXiaomiMiA3() {
      this.$store.commit("deXiaomiMiA3");
    },
    clsXiaomiMiA3() {
      this.$store.commit("clsXiaomiMiA3");
    },

    //------XiaomiRedminote8
    addXiaomiRedminote8() {
      this.$store.commit("addXiaomiRedminote8");
    },
    deXiaomiRedminote8() {
      this.$store.commit("deXiaomiRedminote8");
    },
    clsXiaomiRedminote8() {
      this.$store.commit("clsXiaomiRedminote8");
    },

    //-----------------------------------------------------
    myFunction() {
      document.getElementById("to").reset();
    },
    getData() {
      firebase
        .firestore()
        .collection("IPhonepad")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textList = data;
        });
      firebase
        .firestore()
        .collection("IPhone12")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListiphone12 = data;
        });
      firebase
        .firestore()
        .collection("IPhoneSE64GB")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListIPhoneSE64GB = data;
        });
      //-----------------------------SAMSUNG
      firebase
        .firestore()
        .collection("samsungGalaxyA30s")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListsamsungGalaxyA30s = data;
        });
      firebase
        .firestore()
        .collection("samsungGalaxyA01")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListsamsungGalaxyA01 = data;
        });
      firebase
        .firestore()
        .collection("samsungGalaxyA50S")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListsamsungGalaxyA50S = data;
        });
      //-----------------------------OPPO
      firebase
        .firestore()
        .collection("oppoReno5Pro5G")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListoppoReno5Pro5G = data;
        });
      firebase
        .firestore()
        .collection("oppoReno4")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListoppoReno4 = data;
        });
      firebase
        .firestore()
        .collection("oppoA93")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListoppoA93 = data;
        });
      //-----------------------------XIAOMI
      firebase
        .firestore()
        .collection("XiaomiMi10TPro5G")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListXiaomiMi10TPro5G = data;
        });
      firebase
        .firestore()
        .collection("XiaomiMiA3")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListXiaomiMiA3 = data;
        });
      firebase
        .firestore()
        .collection("XiaomiRedminote8")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListXiaomiRedminote8 = data;
        });
    },
    cls() {
      firebase
        .firestore()
        .collection("IPhonepad")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

      this.$store.commit("depad");
    },
    cls1() {
      firebase
        .firestore()
        .collection("IPhone12")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls2() {
      firebase
        .firestore()
        .collection("IPhoneSE64GB")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    //-----------------------------SAMSUNG---CLS
    cls3() {
      firebase
        .firestore()
        .collection("samsungGalaxyA30s")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls4() {
      firebase
        .firestore()
        .collection("samsungGalaxyA01")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls5() {
      firebase
        .firestore()
        .collection("samsungGalaxyA50S")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    //-----------------------------OPPO---CLS
    cls6() {
      firebase
        .firestore()
        .collection("oppoReno5Pro5G")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls7() {
      firebase
        .firestore()
        .collection("oppoReno4")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls8() {
      firebase
        .firestore()
        .collection("oppoA93")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    //-----------------------------XIAOMI---CLS
    cls9() {
      firebase
        .firestore()
        .collection("XiaomiMi10TPro5G")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls10() {
      firebase
        .firestore()
        .collection("XiaomiMiA3")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls11() {
      firebase
        .firestore()
        .collection("XiaomiRedminote8")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
.youcart {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1em;
}
.youcart h5 {
  font-family: "Kanit", sans-serif;
  font-weight: bold;
}
.card-product {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgb(110, 107, 107);
  border-radius: 5px;
  padding: 1em;
  box-shadow: 10px 10px 5px #b2bec3;
  font-family: cursive;
  width: 80%;
  margin-top: 1rem;
  margin-left: 10rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  color: rgb(25, 10, 10);
  width: 10%;
  text-align: center;
  font-weight: bold;
}
th {
  font-size: 10px;
}
td {
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-family: "Kanit", sans-serif;
  margin-left: 200px;
}
td .fa {
  color: blue;
}
.minus-plus {
  display: flex;
  align-items: center;
  margin-left: 0rem;
  margin-bottom: 1em;
  justify-content: space-around;
}
.minus-plus .fa-minus-square {
  color: black;
}
.minus-plus .fa-plus-square {
  color: black;
}
tr td img {
  width: 20%;
  border-radius: 10px;
}
.imgwi .fa {
  padding-left: -10px;
  color: #fff;
}
.total {
  border-bottom: double #fff;
}
</style>