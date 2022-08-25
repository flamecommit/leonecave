<template>
  <footer class="the-footer">
    <div class="inner">
      <div class="contact">
        <a target="_blank" href="https://www.instagram.com/leone_cave/" class="instagram">Instagram</a>
        <a target="_blank" href="https://twitter.com/LeoneCave" class="twitter">Twitter</a>
        <a target="_blank" href="https://linktr.ee/leone_cave" class="linktree">Linktree</a>
      </div>
      <p class="copyright">© 2022. leone_cave. all rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
</script>


<style lang="scss">
.the-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #000;
  color: #fff;
  height: 120px;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  .contact {
    display: flex;
    justify-content: center;
    column-gap: 5px;

    a {
      display: block;
      width: 20px;
      height: 20px;
      font-size: 0;

      &.instagram {
        background: url(./assets/images/the/contact-instagram.webp) 0 0 / 20px 20px no-repeat;
      }
      &.twitter {
        background: url(./assets/images/the/contact-twitter.webp) 0 0 / 20px 20px no-repeat;
      }
      &.linktree {
        background: url(./assets/images/the/contact-linktree.webp) 0 0 / 20px 20px no-repeat;
      }
    }
  }
  .copyright {
    margin-top: 12px;
    font-size: 12px;
  }
}
</style>