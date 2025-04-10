<template>
  <div class="p-10 space-y-6">
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <DxForm
        :formData="formData"
        :colCount="1"
        @submit="handleSubmit"
        :showValidationSummary="true"
      >
        <DxSimpleItem
          dataField="name"
          label="Name"
          editorOptions="{ validationRules: [{ type: 'required', message: 'Name is required' }] }"
        />
        <DxSimpleItem
          dataField="email"
          label="Email"
          editorOptions="{ validationRules: [{ type: 'email', message: 'Enter a valid email' }] }"
        />
        <DxSimpleItem dataField="isActive" editorType="dxCheckBox" label="Active" />
        <DxButtonItem
          horizontalAlignment="right"
          :buttonOptions="{
            text: 'Submit',
            type: 'success',
            useSubmitBehavior: false,
            onClick: handleSubmit,
          }"
        />
      </DxForm>
    </div>

    <div v-if="loading" class="text-center text-gray-500">
      {{ $t("loading...") }}
    </div>
    <div v-else>
      <DxDataGrid
        :dataSource="filteredContact"
        :allowColumnResizing="true"
        :columnAutoWidth="true"
        :rowAlternationEnabled="true"
        :showColumnLines="false"
        :showRowLines="true"
        :hoverStateEnabled="true"
        class="bg-white p-6 rounded-lg shadow-md"
      >
        <DxColumn
          dataField="fullName"
          caption="Full Name"
          :allowSorting="true"
          :allowFiltering="true"
        />
        <DxColumn
          dataField="emailAddress"
          caption="Email Address"
          :allowSorting="true"
          :allowFiltering="true"
        />
        <DxColumn
          dataField="isActive"
          caption="Status"
          :allowSorting="true"
          :cellRender="renderStatus"
        />
        <DxPager :showPageSizeSelector="true" :allowedPageSizes="[5, 10, 20]" :showInfo="true" />
        <DxPaging :pageSize="10" />
      </DxDataGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useContacts } from "@/composables/useContacts";
import DxDataGrid, { DxColumn, DxPager, DxPaging } from "devextreme-vue/data-grid";
import DxForm, { DxSimpleItem, DxButtonItem } from "devextreme-vue/form";

const { getContacts, loading, searchContacts, filteredContact } = useContacts();

const formData = reactive({
  name: "",
  email: "",
  isActive: false,
});

const handleSubmit = () => {
  searchContacts(formData);
};

const renderStatus = ({ value }: { value: boolean }) => {
  return value
    ? `<span class="status-pill active">Active</span>`
    : `<span class="status-pill inactive">Inactive</span>`;
};

onMounted(async () => {
  getContacts();
});
</script>

<style scoped>
/* Center the form container */
.max-w-lg {
  width: 50%;
}
</style>
