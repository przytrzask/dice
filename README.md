# About

- Gracz ma jedną aktualną kostkę/kartę
- Gracz ma dwa przyciski gdzie decyduję czy następna wartość będzie wyższa czy niższa
- Po decyzji gracza losowana jest nowa kostka/karta i gracz dostaje 0.1pkt jeśli jego decyzja była trafna
- Gra powinna trwać 30 rund

### Requrements

- [x] Wyświetlić obecną kostkę/kartę razem z obrazkiem
- [x] Musi zostać stworzona i wyświetlona historia kolejnych rund i wyników tych rund
- [x] Gra musi wyświetlać ilość pozostałych ruchów oraz ilość punktów .
- [x] Po zamknięciu strony stan gry musi być zapisany
- [x] Powrócenie do gry wyprzedzone jest pytaniem "Czy załadować poprzednią grę?"
- [x] Jeśli gracz wybierze "TAK" to wczytujemy grę ze stanem jak przed zamknięciem
- [x] Jeśli "NIE" rozpoczynamy nową grę

### Tests

- `yarn run/npm start test:e2e`
