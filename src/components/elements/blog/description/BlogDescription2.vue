<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="text">
      <div class="part_1">
        <h2 class="size_4">Как устроен внедорожный самокат?</h2>
        <p class="size_5">
          Внедорожный электрический самокат не имеет подвесных блоков и узлов. Его главная доля веса приходится на раму и
          АКБ. Второстепенная часть приходится на колеса, руль и двигатель. Батарея обычно располагается под декой, в
          редких случаях его крепят на рулевой колонке.
          <br><br>
          Колеса обладают отличной проходимостью. «Водитель» может кататься по лесным тропинкам, проселочным дорожкам и по
          другим неровностям.
        </p>
      </div>
      <div class="part_3">
        <p class="size_5">
          Перечисленные выше особенности являются самыми важными при выборе внедорожного электросамоката. Эксперты
          советуют не покупать слишком тяжелые модели тем, кто живет в много квартирном доме и не имеет возможности
          парковать транспорт у дома. Если человек планирует кататься далеко за городом, при этом добираться до места на
          общественном транспорте, то ему нужно рассмотреть складную и облегченную модель самоката. К дополнительным
          удобствам относят сиденье, габаритный фонарь, фары и багажник для перевозки маленьких сумок.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h2 {
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    line-height: 80px;
    color: var(--black-color);
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
  }
}
@media screen and (max-width: 992px){
  .text{
    margin-bottom: 90px;
  }
}
</style>