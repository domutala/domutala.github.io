<template>
  <v-app>
    <div
      style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <div
        class="px-4 py-4 bg-background border rounded-lg d-flex align-center ga-3"
        style="width: max-content; box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px"
      >
        <svg-icon name="logo" width="20" height="20" class="text-grey" />
        <div style="line-height: 1; font-size: 24px">Mamadou DIA</div>
        <div style="width: 3px"></div>

        <a
          href="https://github.com/domutala"
          style="text-decoration: none; color: inherit; font-size: 24px"
          target="_blank"
        >
          <i class="fi fi-brands-github"></i>
        </a>
        <a
          href="https://wa.me/+212643673564"
          style="text-decoration: none; color: inherit"
          target="_blank"
        >
          <i class="fi fi-brands-whatsapp" style="font-size: 24px"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/domutala/"
          style="text-decoration: none; color: inherit"
          target="_blank"
        >
          <i class="fi fi-brands-linkedin" style="font-size: 24px"></i>
          <!-- <svg-icon name="linkedin" width="28" height="28" /> -->
        </a>
      </div>
      <div
        style="
          line-height: 1;
          margin-left: 13px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        "
      >
        <svg-icon
          name="verifiyed"
          width="20"
          height="20"
          class="text-success"
        />
        <b>Senior Software Engineer</b>
      </div>
    </div>

    <div
      style="
        opacity: 0.5;
        position: fixed;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 5px;
      "
    >
      <svg-icon name="helmet" width="20" height="20" />
      Website under maintenance
    </div>
  </v-app>
</template>
