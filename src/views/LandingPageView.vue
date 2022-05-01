<template>
  <section>
    <FrontSection />
    <IntroductionSection />
    <StaffSection />
  </section>
</template>

<script>
import FrontSection from "@/components/FrontSection.vue";
import StaffSection from "@/components/StaffSection.vue";
import IntroductionSection from "@/components/IntroductionSection.vue";
export default {
  components: {
    FrontSection,
    IntroductionSection,
    StaffSection,
  },
};
</script>