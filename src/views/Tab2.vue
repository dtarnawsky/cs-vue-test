<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-select
        v-model="selectedId"
        placeholder="-- Select --"
        interface="action-sheet"
      >
        <ion-select-option value="0">Name 1</ion-select-option>
        <ion-select-option value="1">Name 2</ion-select-option>
        <ion-select-option value="2">Name 3</ion-select-option>
        <ion-select-option value="3">Name 4</ion-select-option>
      </ion-select>
      <ion-button @click="showToast">Show Toast</ion-button>
      <ion-datetime
        display-format="MM/DD/YYYY"
        picker-format="MM/DD/YYYY"
        display-timezone="utc"
        placeholder="-- Set date --"
        picker-timezone="utc"
        v-model="admitDate"
        :min="minAdmitDate"
        :max="maxAdmitDate"
        done-text="Select"
      ></ion-datetime>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSelect,
  IonButton,
  IonSelectOption,
  IonDatetime,
} from "@ionic/vue";

import { showPopup } from "../popup";

export default {
  name: "Tab2",
  components: {
    IonSelectOption,
    IonButton,
    IonSelect,
    IonDatetime,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },

  setup() {
    const showToast = () => {
      showPopup("Hey Hey");
    };
    return { showToast };
  },
  
  data() {
    return {
      maxAdmitDate: "2024-11-05T08:15:30-05:00",
      minAdmitDate: "1994-11-05T08:15:30-05:00",
      admitDate: "2021-11-05T08:15:30-05:00",
      selectedId: 0,
    };
  },
};
</script>
