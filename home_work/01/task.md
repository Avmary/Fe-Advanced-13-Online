Пришло время начать создавать интерфейс для нашего приложения заметок, начнем с динамического создания коллекции заметок. Хорошая новость - верстка уже готова, тебе необходимо только написать JS-код. 🎉

Используй заготовку проекта из этой ветки репозитория, обязательно прочитай инструкцию.

Перенеси свой класс Notepad, сделай экземпляр передав ему начальные заметки и используй геттер для получения всех заметок.
Напиши функцию createListItem(note) для создания одного элемента списка ul.note-list c карточкой заметки. Создавай DOM-узлы с помощью document.createElement.
Напиши функцию renderNoteList(listRef, notes), которая получает ссылку на DOM-узел списка ul.note-list и массив объектов заметок, вызывает createListItem(note) столько раз, сколько объектов в массиве, после чего добавляет все карточки в список.
Элемент списка имеет следующий вид.

Используй карты имен иконок и действий заметки для подстановки констант.
Обрати внимание на data-атрибут data-id у элемента списка, туда записывай идентификатор заметки, это понадобится в следующих работах.
Разметка элемента списка довольно большая, поэтому есть смысл не писать все в одной функции createListItem (будет простыня кода), а вынести создание отдельных частей карточки и просто вызывать их в createListItem, к примеру:

Для div.note**content можно написать функцию createNoteContent.
Для footer.note**footer можно написать функцию createNoteFooter.
Так как button.action повторяется много раз, можно написать функцию createActionButton.

<li class="note-list__item" data-id="тут id заметки">
  <div class="note">
    <div class="note__content">
      <h2 class="note__title">Lorem, ipsum dolor.</h2>
      <p class="note__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        libero atque, sint quas impedit est illum labore veniam aspernatur neque
        nostrum aliquam dicta blanditiis. Esse porro impedit ratione soluta
        amet?
      </p>
    </div>
    <footer class="note__footer">
      <section class="note__section">
        <button class="action" data-action="decrease-priority">
          <i class="material-icons action__icon">expand_more</i>
        </button>
        <button class="action" data-action="increase-priority">
          <i class="material-icons action__icon">expand_less</i>
        </button>
        <span class="note__priority">Priority: Low</span>
      </section>
      <section class="note__section">
        <button class="action" data-action="edit-note">
          <i class="material-icons action__icon">edit</i>
        </button>
        <button class="action" data-action="delete-note">
          <i class="material-icons action__icon">delete</i>
        </button>
      </section>
    </footer>
  </div>
</li>
