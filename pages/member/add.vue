<script setup>
import BaseFormSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { useApiCall } from "~/composables/useApiCall";
const { data: divisions } = await useFetch(
  "https://bdapis.herokuapp.com/api/v1.1/divisions"
);

const manageDivisions = useState(() => {
  let division = [];
  divisions.value.data.map((d) =>
    division.push({ label: d.division, id: d.divisionbn })
  );
  return division;
});
const selectDivision = useState(() => null);
const selectDistrict = useState(()=> null)
const districts = useState(() => []);
const upazillas = useState(() => []);

const manageDistricts = useState(() => {
  const district = [];
  districts.value.map((d) => {
    district.push({ label: d.district, id: d._id });
    upazillas.value.push(d.upazilla);
  });
  return district;
});

const handleSubmit = () => {};
const doSomeThing = async () => {
  const { data } = await useApiCall({
    url: `https://bdapis.herokuapp.com/api/v1.1/division/${selectDivision.value.label}`,
  });
   districts.value.push(...data);
};
console.log(districts.value)
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="dashboard">
    <section>
      <form @submit.prevent="handleSubmit">
        <div class="flex">
          <BaseFormInput label="Name" />
          <BaseFormInput class="ml-2" label="NID number" type="number" />
        </div>
        <div class="flex">
          <BaseFormInput label="Father Name" />
          <BaseFormInput label="Mother Name" class="ml-2" />
        </div>
        <div class="flex mb-3">
          <BaseFormSelect
            class="bg-white w-[100%]"
            placeholder="Select Division"
            :options="manageDivisions"
            @option:selected="doSomeThing"
            v-model="selectDivision"
          />
          <BaseFormSelect
            class="bg-white w-[100%] ml-2"
            placeholder="Select District"
            :options="manageDistricts"
            v-model="selectDistrict"
          />
        </div>
        <!-- <div class="flex mb-3">
          <BaseFormSelect
            class="bg-white w-[100%]"
            placeholder="Select Division"
            :options="manageDivisions"
            v-model="selectDivision"
          />
          <BaseFormSelect
            class="bg-white w-[100%] ml-2"
            placeholder="Select Division"
            :options="manageDivisions"
            v-model="selectDivision"
          />
        </div> -->
        <BaseButton btnText="Add Member" type="submit" />
      </form>
      <pre>
        {{ selectDistrict }}
      </pre>
    </section>
  </NuxtLayout>
</template>
