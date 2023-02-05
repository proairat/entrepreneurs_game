import { useModulesStore } from "@/stores";
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";

export function useViewModulesEntity() {
  const modulesStore = useModulesStore();
  const { activeModule, activeTheme } = storeToRefs(modulesStore);
  const backTo = ref({
    path: `/modules`,
    name: "ViewModules",
  });

  // const filteredList = computed(() => FuzzySearch(search.value, modules, "title"));

  const getModuleHeader = computed(() => activeModule.value.header);
  const getModuleId = computed(() => activeModule.value.id);
  const getThemeTitle = computed(() => activeTheme.value.title);

  return {
    backTo,
    getModuleHeader,
    getModuleId,
    getThemeTitle,
  };
}
