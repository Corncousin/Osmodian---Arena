# Osmodian Brain

Version: 0.8.9

## Project Summary

Osmodian is a multi-mode progression game where the player guides a clan through eras. Each standalone mode is playable on its own, and later connects into the main game. Initial development focuses only on **Stone Age** content.

## Build Phases

1. Arena MVP
2. DnD MVP
3. TCG MVP
4. Base Builder MVP
5. Idle MVP
6. Connect standalone MVPs into the main game
7. Iterate

## Product Guardrails

* Stone Age only for the first wave of MVPs
* Standalone games first, integration later
* Mechanical balance is a top priority
* No monetization that creates direct combat power imbalance inside fair competition
* Permanent death is a core pillar and is non-negotiable
* Development should stay maintainable with small files, descriptive names, tests for every change, and an always-current todo list and file tree

## Arena Consumables Direction

### MVP Scope

* Stackable consumables are planned, but they are **post-MVP**
* Examples include health potions, stamina potions, and similar items
* Consumables become more relevant later when main stat blocks are expanded with sub-stats such as stamina

## Arena Inventory Direction

### Carrying Rules

* Arena MVP includes an inventory capacity system
* Carry limit is based on the leader's **STR**
* There is also a separate **maximum inventory size** limit
* **Equipped gear counts toward carry limit**
* Inventory storage is a fixed number of **bag slots** for holding equipment
* Outfit/equipment slots are separate from bag inventory slots

### Monetization Note

* Maximum inventory size may be expandable through monetization
* This must be treated as a convenience feature and reviewed carefully so it does not become a meaningful combat or progression advantage

## Arena Shop Direction

### Starting Currency

* Starting currency amount is **200**
* Every newly created leader starts with **exactly 200**, no more and no less
* Gold does **not** transfer from a dead or retired leader to the next leader
* The internal/domain name remains **gold** for now, even though that is not era-accurate for Stone Age flavor
* This amount is intended to shape early item pricing and first-loadout decisions

### Shop Availability

* **Common** items are always for sale
* **Uncommon** items are always for sale
* Uncommon items are roughly **2x as expensive** and almost **2x as powerful** as common items

### Rare Item Availability

* Rare items are **not** always available
* Each day, the shop generates **1 random rare item for sale**
* The next day, a different random rare item appears
* The daily rare item is **different per player** and fully random
* A reroll option may exist later via monetization or ads
* Rare-item reroll should be limited to **1 time per day**

### Design Notes

* Constant access to common and uncommon gear supports reliable progression and recovery after death
* A rotating daily rare slot creates excitement without making rare items fully deterministic
* Per-player rare rolls increase variety, but reroll mechanics are high-risk because they can become a best-in-slot fishing tool
* Starting currency will strongly shape first-build diversity, so the exact amount needs careful tuning
* Constant access to common and uncommon gear supports reliable progression and recovery after death
* A rotating daily rare slot creates excitement without making rare items fully deterministic
* Per-player rare rolls increase variety, but reroll mechanics are high-risk because they can become a best-in-slot fishing tool
* Starting currency will strongly shape first-build diversity, so the exact amount needs careful tuning
* Constant access to common and uncommon gear supports reliable progression and recovery after death
* A rotating daily rare slot creates excitement without making rare items fully deterministic
* Starting currency will strongly shape first-build diversity, so the exact amount needs careful tuning

## Arena Item Rarity Direction

### Base Item Stats

* Weapons have:

  * minimum damage
  * maximum damage
  * base attack speed
* Shields have:

  * block chance
  * armor
* Armor pieces have:

  * armor

### Rarity Structure

* **Common** items are the baseline
* **Uncommon** items have slightly higher stats than common items
* A **common item from the next bracket** should be slightly better than an **uncommon item from the previous bracket**
* **Common and uncommon items do not roll random stat variance**
* **Rare and higher** gear can include stronger base values plus an additional random improvement

### Rare Effect Direction

For Arena MVP, rare gear should usually have:

* higher base item values, such as higher weapon min/max damage
* **one random improvement** layered on top

Example random improvements:

* `+1 STR`
* `+5% block`
* `+1 crit damage`

### Rare Affix Pool Rule

* Random improvements should come from a **curated pool** based on:

  * item type
  * bracket
* This keeps bonuses appropriate for the item and allows later brackets to unlock broader or more complex affix pools
* Early Stone Age brackets should use simpler affixes

### Higher-Level Expansion

At higher levels or later content tiers, items may also gain bonuses related to:

* bleeding
* leech
* stun
* resistances to those and similar effects

### Future Expansion

* **Cursed items** are planned later
* Cursed items have detrimental effects when equipped
* Cursed items are likely **post-MVP**

## Arena Gear Model Direction

### Confirmed Gear Families

Arena equipment is split into three major families:

* **Armor**
* **Weapons and shields**
* **Items**

### Armor Slots

Arena MVP uses a full armor slot model:

* Head
* Shoulders
* Chest
* Arms
* Hands
* Legs
* Feet

Design note:

* This gives strong build granularity and itemization depth
* It also increases loot complexity, balancing load, and inventory pressure, so drop pacing and slot value distribution will need careful tuning

### Armor Categories

#### Light Armor

* DEX-oriented
* Low armor value
* Low or no speed limitation

#### Medium Armor

* Mixed DEX and STR requirements
* Medium armor value
* Medium speed limitation

#### Heavy Armor

* STR-oriented
* High armor value
* High speed limitation

### Weapon and Shield Categories

#### One-Handed Weapons

* Can be DEX-based or STR-based
* Trade speed versus damage output

#### Two-Handed Weapons

* STR-based
* Slower, higher damage output

#### Shields

* Defensive off-hand equipment
* Primarily tied to block and defensive mitigation

### Items

* Rings, necklaces, and similar accessories
* Primarily used to boost stats

### Belts

* Belts are a special item family
* Intended to cause combat events such as bleeding or stun
* Belts should be **rare** and are a **late-game addition**
* Belts are **not part of Arena MVP**

### Durability

* Durability is **out of scope for Arena MVP**
* It should be tackled in a later design pass after the core combat and economy loops are stable

### Repair

* Because durability is not part of Arena MVP, repair is also out of scope for MVP
* Repair can be revisited later together with durability design
* Repair is **player-decided**, not automatic
* Repair may use either a **timer-based flow** or a **monetized action**
* Monetized repair is intended only to speed up progression pacing, not to create direct combat power advantages within a bracket
* The exact UX and economy rules still need to be defined

### Death Loop Principle

* Death is a core progression pillar
* A player is expected to die and create new leaders over time
* The game should be designed so that true long-term success requires engaging with that death-and-legacy loop
* A replacement leader should receive a meaningful inherited benefit so death acts as a growth mechanism, not only a reset
* The inherited benefit is primarily **rare-or-higher gear retention**, not gold carryover

### Gear Design Notes

* Repair monetization is high-risk and can easily become a pay-to-maintain or pay-to-compete mechanic if durability materially affects combat readiness
* If monetized repair exists, it should not create a combat power advantage over players who do not pay
* Death, durability, and repair economics will need to be tuned together very carefully
* Gear should create loadout identity, not just linear stat inflation
* Armor class must affect both survivability and tempo, not only defense values
* Shields should remain distinct from generic off-hand stat items
* Belts are interesting, but status-effect gear can easily become dominant if introduced too early or tuned too strongly

## Arena Level-Up Progression Direction

### Per-Level Stat Gain

* Leaders gain **2 stat points per level** in Arena MVP
* This is appropriate for MVP because the number of core stats is still small

## Arena Respec Direction

### Current Direction

* Respec is **standalone Arena only**
* Respec is allowed through **respec points**
* Respec points are earned by the player and can be used across all leaders
* If the player runs out of respec points, additional respecs may be purchasable through monetization

### Respec Point Sources

* Very rare random drops
* Boss rewards with a higher random chance
* Tournament rewards

### Design Notes

* Because respec is standalone-only and leaders can always be replaced through the death-and-legacy loop, paid respec is less dangerous here than it would be in the full integrated game
* Even so, respec availability still affects experimentation speed and build iteration pace, so rates and monetization limits should be tuned carefully
* Shared respec points support experimentation without forcing every leader to be disposable due to one bad allocation
* Respec rules must remain clearly separate from full-game progression rules later

## Leader Lifecycle Persistence Direction

### MVP Rule

* Dead or retired leaders should be **soft-archived in the database**
* They do not need to remain separately viewable in the MVP UI
* Their statistics still roll up into player cumulative statistics
* Keeping them archived preserves future design flexibility for history, analytics, or memorial-style features later

### Gear / Gold Inheritance Rule

* Gold does **not** transfer on death or retirement
* Every new leader starts with a fresh **200** gold
* Gear of **rare or higher rarity** is retained across death/retirement
* Retained gear can be equipped by the new leader or sold later
* Lower-rarity gear does not persist through the death/retirement inheritance rule
* This keeps a high-bracket leader's death more balanced for a new bracket-1 leader

## Arena Leader Creation Direction

### MVP Scope

* Leader creation includes:

  * name
  * starting stat allocation
* Leader creation does **not** require an initial loadout selection
* A leader can be created without gear
* Leader names must be **unique per player**, but do not need to be globally unique
* Leader names in MVP use:

  * length limits
  * allowed character rules
* Profanity filtering is **not** part of MVP name validation
* Class and race selection are **post-MVP**

### Starting Progression State

* A newly created leader starts at:

  * **bracket 1**
  * **level 0**
  * **xp 0**

### Starting Stat Allocation

* A new leader starts with **5 stat points**
* **2 points are automatically allocated to HP** to prevent invalid zero-HP builds
* All other stats start at **0** on creation unless the player allocates points into them later
* The remaining **3 points** are free for the player to allocate, including into **CRT**
* Those 3 points are allowed to remain **unspent** after leader creation

## Arena Level-Up Progression Direction

### Stat Allocation

* Arena MVP uses **fully manual stat allocation** on level-up
* This supports experimentation and distinct builds
* It also creates a risk of trap builds, so later UX guardrails may be needed such as previews, recommendations, or respec-related rules

## Arena Level Cap Direction

### Bracket Gating

* Levels are effectively capped by **bracket progression**
* The moment a leader would advance to the next bracket, a bracket-gate state begins
* Example: if the next bracket starts at level 4, the leader remains at **level 3** with the maximum XP for that level until the boss gate is cleared
* This means Arena MVP does not need a separate global level cap system on top of bracket gating

## Arena Boss Progression Direction

### Bracket Bosses

* Arena MVP uses **one fixed boss per bracket** for advancement
* The boss acts as the gate to the next bracket
* This favors learnability, consistent mastery checks, and cleaner balance tuning
* It also means each boss must be designed carefully so it tests general understanding rather than one narrow counter-build

### Boss Activation State

* A player has **3 boss attempts** to beat the active bracket boss
* The boss gate begins automatically when the leader reaches the threshold for the next bracket
* Once in the boss-gate state, **level-up is blocked**
* Once in the boss-gate state, **training is blocked**
* Once in the boss-gate state, **tournaments are blocked**
* Once in the boss-gate state, **PvP is blocked**
* Once in the boss-gate state, **monster fights are blocked**
* The **shop remains open** during the boss-gate state
* Players can still buy and equip new gear during the boss-gate state
* Any **unspent stat points** can still be allocated during the boss-gate state
* Stat allocation may also still be changed during the boss-gate state according to the respec rules
* Respec is allowed during the boss-gate state
* The player **must fight and defeat the boss** to advance to the next bracket, unless they choose to retire the leader
* Losing a boss fight adds **1 death counter**
* Reaching **3 death counters** results in **permanent death**

### Boss Readiness Warning

* Before activating the boss challenge, the game should clearly show whether a **boss challenge is active or not**
* The UI should show the relevant boss information and the consequences of activation
* The game should **not** present a readiness score, win chance, or risk calculation

### Design Notes

* Boss activation is a commitment state, not just a single fight button
* This creates strong tension and prevents players from endlessly farming power after deciding to challenge advancement
* Because training, tournaments, and XP are frozen, players need clear signaling before they activate the boss state
* Boss readiness UX will matter a lot here, otherwise players may walk into irreversible pressure without understanding the stakes

## Arena Monster Fight Direction

### Bracket Monster Pools

* Every bracket has a tailored set of monsters
* The monster set should be tuned around expected leader power in that bracket
* A newly entered leader in a bracket should be able to beat easier monsters in that bracket
* Harder monsters in the same bracket should present meaningful danger

### Monster Difficulty Presentation

Within a bracket, monster fights should be shown with labeled difficulty tiers:

* Easy
* Medium
* Hard
* Extreme
* Elite

This gives players useful guidance without exposing exact internal ratings.

### Cross-Bracket Access

* Players may choose to fight monsters from lower or higher brackets
* Lower-bracket fights should be safer but give poor rewards
* Higher-bracket fights should be more dangerous, but normal monster fights still do **not** risk leader death
* This creates explicit risk-versus-reward routing rather than a single forced path

### Leader Death Risk in PvE

* Normal monster fights do **not** kill the leader
* Boss fights can kill the leader through the boss death-counter system
* **Elite** monster fights are a special case and can kill the leader
* Elite fights should clearly communicate that leader death is possible
* Because normal monster fights are non-lethal, retreat during normal monster combat is not needed for MVP

### Design Notes

* Monster pools should support progression, farming, experimentation, and danger testing
* Reward scaling must be tuned carefully so lower-bracket farming does not become optimal forever
* Higher-bracket access is good for player agency, but it must remain risky enough that it does not bypass bracket progression too easily
* Monster difficulty within a bracket should have a noticeable spread rather than a flat average

## Arena PvP Direction

### Core PvP Flow

* PvP uses the **same fully automated combat flow** as training fights
* PvP fights resolve through the combat engine and detailed combat logs

### Challenge Board

* Any leader can place a **challenge / wager** on a board
* The challenge creator specifies criteria such as:

  * minimum and maximum level or bracket
  * allowed item rarity
  * gold won or lost
  * XP won or lost, but only within **system-capped limits**
  * whether permanent death is enabled

### PvP Restrictions

* Players with multiple leaders cannot battle their own leaders
* Challenge acceptance checks the accepting leader against the challenge criteria
* When a valid opponent accepts, the original poster's loadout is checked again against the challenge criteria
* If the original poster has equipped disallowed gear since posting, disallowed items are automatically removed
* If suitable replacement gear exists, it should be equipped automatically
* If no suitable replacement exists for a slot, the slot remains empty
* It is the original poster's responsibility to keep their leader compatible with their posted challenge
* The UI may warn the original poster if they equip gear that violates an active posted challenge
* Gold is removed immediately upon challenge registration

### Tournament Rules

* Arena MVP tournaments do **not** allow permanent death
* Tournament risk should come from placement, rewards, and opportunity cost rather than leader deletion
* Bracket 1 tournaments are **free to enter**
* Every bracket above bracket 1 has an **increasing registration fee**
* Tournament registration fees are **not** the prize pool
* Tournament winnings are determined separately and can be random within the designed reward structure

### Tournament Reward Direction

Tournament rewards are based on:

* **wins**
* **final placement**
* **bracket difficulty**

Working payout shape:

* **33-64**: no tournament placement money, but a small reward per win
* **20-32**: break-even tournament result by returning the entry fee, plus a small reward per win
* **1-20**: scaling tournament winnings based on final placement, plus a small reward per win
* **1-3**: special item reward in addition to placement rewards

### Top-3 Special Reward Structure

* **3rd place**: choose 1 from 3 random **common** items
* **2nd place**: choose 1 from 3 random **uncommon** items
* **1st place**: choose 1 from 3 random **rare** items

Reward notes:

* Common and uncommon tournament reward items are also available in the shop
* This means the reward is either a useful new item or something that can be sold for extra gold
* Rare items can also exist in the shop, but with **special restrictions**

### Bracket-Specific Reward Pools

* Every bracket has its own shop inventory
* Higher brackets introduce new equipment
* Each bracket tournament therefore has its own reward pool tied to that bracket's equipment ecosystem

### Design Notes

* Top-3 special rewards should feel desirable without turning tournaments into the only viable gear path
* Rare-item shop restrictions will need to be defined carefully so tournament rewards still feel meaningful
* Bracket-specific loot pools are strong because they make each bracket feel distinct and prevent low-bracket tournaments from leaking top-tier item access
* Top-3 special rewards are likely to become the most important tournament incentive, so rarity, power level, and bracket scaling will need careful control
* Tournament rewards should feel worthwhile without making tournament participation the only dominant progression path
* Wager boards are high-risk for collusion, feeding, smurfing, and alt-account abuse
* The design intentionally prefers player freedom over excessive up-front guard rails
* Anti-cheat and anti-abuse options must be investigated thoroughly as a dedicated design stream
* XP stakes are allowed, but only within system-capped limits to avoid degenerate farming patterns
* XP stake caps should be both **bracket-aware** and **level-aware**
* Gold stakes will also need sensible bracket-aware limits or validation rules
* Permanent-death PvP should remain a clearly marked high-risk mode, not the default expectation
* Tournaments should not be a leader-deletion source in MVP

## Arena MVP Decisions

### Confirmed

* Arena is the first MVP
* Standalone Arena may support up to **5 leaders** per player
* Main full game will allow only **1 leader**
* Leaders do not share gear or otherwise interact directly
* Leaders can fight monsters for XP and gold
* PvP exists
* PvP reward restrictions are acceptable for MVP
* Permanent death matches can exist in PvP
* Players can buy and equip gear
* Resource scarcity is intentional, so full optimal loadouts should not be easily reachable
* Players gain stat points on level-up
* A boss must be defeated to advance to the next bracket
* Permanent death is a core Arena feature

### Permanent Death Rules for Standalone Arena

When a leader dies:

* The player creates a new leader
* The new leader starts from scratch in progression terms
* Gold carries over
* Rare items won from tournaments or fights are kept
* **All gear is owned by the tribe**, not by the individual leader
* Tribe-owned gear remains available to the next leader
* Because durability is out of MVP scope, death does not destroy equipped gear through a durability system
* This means death resets the leader, but not the tribe inventory/economy layer

### Retirement

* A player may always **retire** their leader voluntarily
* Retirement is treated the same as leader death for progression purposes
* Retirement is **instant** and has **no extra cost**
* The player can then create a new level-0 leader and continue with the tribe's persisted gear and currency

### Permanent Death Triggers in Standalone Arena

1. PvP permanent death match
2. Losing a training fight against an elite opponent
3. Losing 3 boss fights while trying to advance to the next bracket

### Planned Additional Death Triggers in Full Game

* Negative events such as flood or disease
* Being overthrown due to failed leadership
* Invasion
* Other era/system-specific risks

## Arena Randomness Direction

### MVP Rule

* Attack rolls and all other combat-relevant rolls should be **fully random**
* Arena MVP should not use deterministic pre-seeded fight outcomes as a gameplay-visible rule
* Randomness should remain a core part of combat outcome variance

## Arena Combat Log Direction

### MVP Rule

* Combat logs should be **detailed, flavorful, and readable**
* Logs should reference the actual equipped weapon or defense action where relevant
* Logs should explain key outcomes such as hit, dodge, block, crit, and final damage dealt

### Fight Speed

* Fights can run at various playback speeds
* Fights can also be completed **instantly**

### Post-Fight UX

* After a fight, the player should see a **short summary**
* The full combat log should remain accessible in a **scrollable modal**
* Independent fight logs do **not** need to be stored long-term in MVP

Suggested summary contents:

* winner
* fight duration
* total hits
* total damage
* crits, dodges, and blocks

### Tracked Statistics

Track statistics at both levels:

* **leader-level** lifetime statistics
* **player-level cumulative** statistics across leaders

Examples of tracked statistics:

* number of fights
* wins and losses
* number of deaths
* biggest damage dealt
* biggest damage taken
* and other cumulative combat/progression records

Player-level cumulative stats should **include retired and dead leaders automatically**.
Dead or retired leaders do **not** need to remain separately viewable in MVP, as long as their contribution is represented in player-level cumulative statistics.

### Example Style

* `Leader 1 raises his hammer and lands a massive blow, causing 12 damage.`
* `Leader 2 thrusts his rapier forward but gets dodged, causing only 2 damage.`

### Design Notes

* Flavor text should remain mechanically clear enough that players can learn from it
* Combat logs are also useful for debugging and balance validation
* Instant resolution plus optional full logs gives both speed and transparency

## Arena Combat Model

### Confirmed Direction

* Combat is **auto-resolved**
* Combat is driven by a **time/timer system**, not by simple strict alternating turns
* Each fighter has an **attack timer**
* When a fighter's timer reaches **0**, they perform an attack action and their timer resets
* If both fighters reach 0 at the same time, **initiative** decides who acts first
* Leaders can have **skills with triggers**
* Fights must generate a **rich combat log** with flavorful readable text
* Outcomes are driven by **stats** and **gear**

### Arena MVP Core Stats

* HP
* STR
* DEX
* LCK
* CRT

### Stat Responsibilities

#### STR

* Increases minimum and maximum damage output on top of weapon damage
* Increases carry limit
* Contributes to armor restriction checks for heavier armor
* Increases blocked damage when using a shield

#### DEX

* Contributes to initiative
* Increases attack speed, adjusted by armor loadout
* Contributes to armor restriction checks for lighter armor
* Increases chance to hit
* Increases chance to dodge

#### HP

* Controls hit points only for MVP

#### LCK

* Adds a small percentage modifier to many rolls
* Examples include hit-related thresholds, block-related rolls, dodge-related rolls, and similar probability checks
* LCK should remain useful but capped so it does not dominate the stat model

#### CRT

* Increases critical hit chance slightly
* Increases critical damage output slightly
* Separates critical performance from the basic hit roll so DEX/LCK do not become overloaded
* Is a normal allocatable stat from leader creation onward and during later stat allocation

### Numeric Representation Rule

The game may display values with decimals, but internal numeric systems should use purpose-specific scaled integers.

Recommended internal representation:

* **Time**: use integer hundredths of a second or another fixed time unit, but keep it semantically correct so `1.50` means 1 second and 50 hundredths, not 1 second and 30 hundredths
* **Damage / stats**: use a separate fixed-point scale appropriate for combat math
* Do not mix time precision rules with damage/stat precision rules

### Initiative

Initiative determines who acts first when combat starts, and who wins action ties when both fighters become ready at the same time.

Working initiative inputs:

* DEX
* LCK
* Armor weight

Design intent:

* Higher DEX helps significantly
* Higher LCK adds chance variance
* Heavier armor penalizes initiative
* Results should still include dice-roll variance so the faster build does not always open first

### Attack Speed

Attack speed determines how quickly a fighter becomes ready to act again.

Working interpretation:

* Every fighter has a readiness timer
* Lower timer values mean more frequent attacks
* Example: a fast fighter may act multiple times before a slow fighter acts once
* Example from design discussion: if one fighter has attack speed 1 and another has attack speed 3, the first may attack multiple times before the second becomes ready

### Gear Importance

Gear is a core combat layer and influences at least:

* Attack speed
* Damage range
* Block chance
* Damage reduction from armor
* Initiative indirectly through armor weight

### Numeric Precision Rule

* All combat-relevant values should support **2 decimal places**
* This includes stats, timers, damage values, mitigation, and related calculations
* For combat timing, this means internal precision equivalent to **hundredths of a second**

### Implementation Rule

* Do **not** use raw floating-point values for combat resolution
* Use **fixed-point integer math** internally instead
* Example: store `1.25` seconds as `125`, `7.50` damage as `750`, and convert to readable decimals only for UI/log rendering

### Hit Resolution Direction

Working combat philosophy uses **contested d100 threshold rolls** where **high rolls are good**.

Current direction:

* Attacker rolls `1d100`
* A hit succeeds if the roll is **equal to or above** the required hit threshold
* Base required threshold starts at **50**
* Attacker DEX lowers the required threshold, making hits easier
* Defender DEX raises the required threshold, making hits harder
* LCK can influence thresholds in a capped way

Working formula shape:

* `hit succeeds if roll >= requiredHitRoll`
* `requiredHitRoll = 50 - attackerHitModifiers + defenderAvoidModifiers`

Critical direction:

* Critical outcomes are separated from the base hit-threshold stat model
* **CRT** is the main stat that increases critical hit chance and critical damage slightly
* LCK may still have a smaller capped influence on critical outcomes, but CRT is the dedicated crit stat

### Critical Design Notes

* Universal luck stats are at high risk of becoming mandatory if they influence too many systems too strongly
* Crit chance and crit damage formulas need explicit caps and scaling rules
* LCK must remain useful at high levels even when ordinary hit, block, or dodge caps are approached
* Threshold systems are good for readable combat logs and player understanding, but they need strict formulas to avoid hidden balance drift
* If LCK is intended to be the strongest stat in some conditions, it should be framed as the **highest ceiling stat**, not the best default stat
* CRT is the dedicated critical stat and should be tuned so it is attractive without becoming mandatory for every viable build

### Design Notes

* Arena combat is better described as a **timeline-based auto battler** than a turn-based battler
* The combat log is not just cosmetic. It is also a debugging and balance tool
* Triggered skills can add depth, but they are also a major balance risk if trigger priority and resolution order are not explicit
* The exact math for timer progression, minimum and maximum attack speed, and tie resolution still need to be defined

## Arena Tournament Design

### Confirmed Direction

* Daily tournament
* Always target 64 contestants per tournament
* If not enough humans join, fill remaining slots with bots
* If more than 64 contestants join, split into the minimum number of tournaments needed
* Human distribution across tournaments should stay as even as possible
* Every leader fights exactly 6 times
* Winners are paired toward stronger result groups, losers toward weaker result groups
* Tournament ends with a full ranking from 1 to 64

### Working Terminology

This is **not** a standard knockout bracket.
It is closer to a **6-round Swiss-style tournament with final ranking placement**.

## Arena Secondary Defense Model

### Confirmed Direction

Arena MVP should support **block** and **dodge** as secondary defense layers after an attack has already connected.

### Recommended MVP Structure

Use a **two-stage defense model**:

1. **Defense success roll** to determine whether the defender successfully blocks or dodges
2. **Defense quality roll** to determine how effective that successful block or dodge was

This preserves drama and readability while avoiding overly noisy continuous formulas.

### Block

* Block is resolved after a successful hit
* Block is only available when using a **shield**
* Block is primarily associated with **STR**
* Block reduces some or most of the incoming damage
* Block should generally be **more reliable** than dodge
* Block should usually have a **lower top-end** than dodge, except in rare cases where full negation occurs
* Full negation to **100%** is allowed, but it should be rare

### Dodge

* Dodge is resolved after a successful hit
* Dodge is primarily associated with **DEX**
* Dodge reduces some, most, or all of the incoming damage
* Dodge should generally be **less reliable** than block
* Dodge should have a **higher top-end**, including rare full negation outcomes
* A natural high roll such as `100` can be used for a perfect dodge case if retained in final rules

### Defense Selection Direction

Working recommendation for Arena MVP:

* Calculate both effective dodge chance and effective block chance if the loadout allows both
* If one defense exceeds the other by a large margin, use only the stronger defense
* If the values are relatively close, allow a limited fallback behavior instead of full unrestricted double defense
* If the values are nearly equal, a hybrid defense flow may be allowed, but this should be tuned carefully to avoid defensive stacking becoming dominant

Current design direction under discussion:

* If the stronger defense exceeds the weaker one by more than a meaningful threshold, only use the stronger defense
* If the stronger defense exceeds the weaker one by a smaller margin, use the stronger defense first and allow the weaker defense only if the first fails, with a penalty
* If both defenses are very close, allow both defenses with penalties
* The penalty on hybrid defense must be high enough that it is not automatically better than specializing in only dodge or only block

Design caution:

* This concept is flavorful and supports agile buckler-style builds, but it is also at high risk of over-rewarding hybrid defense characters
* For MVP, the final version should likely be a simplified version of this idea, not the full unrestricted form

### Suggested Outcome Shape

After a successful defense, resolve a quality result such as:

* weak defense
* solid defense
* strong defense
* perfect defense

This can later map to mitigation percentages.

### Crit Interaction Direction

Critical attacks should not fully ignore defenses by default.
Instead, crits should reduce the maximum protection a defense can provide.

Example direction:

* A critical hit against a shield block may force some minimum bleedthrough damage unless the block result is a rare perfect block
* A perfect dodge may still avoid all damage

### Future Expansion

* **Parry** is planned for later as a distinct defense/counter system
* Parry is intended for **one-handed wielders**
* Parry may include a counterattack component and should remain separate from shield block

### Design Notes

* Treating dodge and block as post-hit mitigation layers creates a richer defense system than hit chance alone
* A two-stage model is more readable and tuneable than a fully continuous damage reduction formula for MVP
* Bleedthrough is probably necessary to stop ultra-fast low-damage builds from becoming completely invalid against tanks
* Partial dodge/block outcomes may create better balance than binary all-or-nothing defense

## Arena Build Archetype Direction

### Confirmed Balance Intent

Arena MVP should support at least these viable archetype families:

* **DEX / dual wield**: many hits, lower damage per hit, high pressure through tempo
* **STR / two-handed**: fewer hits, much higher damage per hit, burst-oriented
* **Tank / heavy armor**: slower actions, high mitigation, strong survival, lower burst

### Balancing Principle

These archetypes should be balanced around effective combat output and counterplay, not around one dominant stat stack.
A useful comparison lens is **damage per second (DPS)**, but DPS alone is not enough. Balance must also consider:

* survivability
* mitigation
* initiative
* attack timing
* consistency versus variance
* matchup spread

## Risks and Design Notes

* Multi-leader standalone mode improves experimentation, but it may also create optimization and farming behavior that will need later anti-abuse rules
* PvP reward design must prevent collusion, boosting, and alt-account abuse
* Scarcity plus permanent death can become frustration-heavy if replacement pacing is too slow
* Carryover after death creates a legacy loop, which is good, but it must not snowball too hard
* Boss-gate progression is strong, but boss difficulty must test mastery rather than specific stat abuse or one dominant build

## Parked Decisions

* Decide which statistics to show in the UI and where to show them
* Decide whether cumulative statistics should be split by bracket, mode, or other dimensions

## Architecture Track

* Next focus: define repo structure and technical architecture for Arena MVP
* Development preference: backend first, then connect a frontend
* User preference: one Arena repo containing both backend and frontend
* Chosen direction: **option 3** -> one repo with a **modular monolith backend** and space for frontend in the same repository

### Proposed Arena Repo Structure

```text
osmodian-arena/
  apps/
    api/
      src/
        modules/
          combat/
          leaders/
          progression/
          inventory/
          shop/
          monsters/
          pvp/
          tournaments/
          bosses/
          stats/
          auth/
        common/
        config/
        main.ts
      test/
      package.json
    web/
      src/
      public/
      package.json
  packages/
    domain/
      src/
        combat/
        leaders/
        progression/
        inventory/
        shop/
        pvp/
        tournaments/
        bosses/
        shared/
      package.json
    contracts/
      src/
      package.json
    config/
      package.json
    test-utils/
      src/
      package.json
  infra/
    docker/
    db/
    scripts/
    helm/
  docs/
    brain/
  package.json
  pnpm-workspace.yaml
  turbo.json
  tsconfig.base.json
  README.md
```

### Chosen Technical Stack

* Monorepo: pnpm workspaces + Turborepo
* Backend: NestJS modular monolith on Node.js, with Fastify adapter
* API style for MVP: REST + OpenAPI
* Database + auth provider: Supabase (Postgres + Auth)
* ORM / migrations: Prisma ORM + Prisma Migrate
* Cache / queue / ephemeral state: defer Redis until it is clearly needed
* Frontend: React + TypeScript + Vite
* Frontend data fetching: TanStack Query
* Frontend local UI state: Zustand
* Backend tests: Vitest for domain/unit tests
* Frontend tests: Vitest
* E2E tests: Playwright
* Local development infra: Docker Compose
* CI/CD: GitHub Actions
* Packaging: Docker images

### Cost / Tooling Constraint

* Cost efficiency is a core requirement
* Avoid tool overkill
* Prefer doing more in fewer tools/platforms when practical

### Hosting Recommendation

* Frontend hosting: Render Static Site
* Backend hosting: Render Web Service
* Database + auth: Supabase
* Keep the number of vendors low for MVP: GitHub + Render + Supabase
* Do not add Redis, GraphQL, Kubernetes, Helm, or Argo CD in MVP unless the product proves the need

### Auth Direction

* Use Supabase Auth as the auth provider
* Keep NestJS as the source-of-truth application backend
* Frontend authenticates via Supabase Auth
* Backend validates Supabase-issued JWTs
* Game rules, persistence rules, and protected actions still live in NestJS modules, not in direct client-to-database flows

### Deployment Direction

* Local:

  * Docker Compose for api + postgres-compatible local DB if needed
  * FE runs with Vite locally
  * Optionally point local API to Supabase dev/staging project
* MVP cloud:

  * Render Static Site for `apps/web`
  * Render Web Service for `apps/api`
  * Supabase for Postgres + Auth
* CI/CD:

  * GitHub Actions for lint, typecheck, tests, build, and deploy orchestration
  * Auto-deploy preview/staging from Git branches where practical
  * Production deploy from protected main branch
* Keep the backend as a modular monolith for Arena MVP even though future minigames will later connect into broader Osmodian systems

### Deployment Environments

* local
* preview / staging
* production
* Local: Docker Compose
* Non-prod / prod: Kubernetes with Helm and Argo CD
* Keep the backend as a modular monolith for Arena MVP even though future minigames will later connect into broader Osmodian systems

## Tooling Decisions

* Code quality tooling: **Biome** for formatting, linting, and import organization
* Git hook manager: **simple-git-hooks**
* Hook strategy:

  * `pre-commit` runs Biome on staged files
  * `pre-push` runs repo tests and full build
* TypeScript cleanup: remove deprecated `baseUrl` usage from tsconfig
* Biome config must follow the **v2** configuration shape (`files.includes`, `assist.actions.source.recommended`) instead of older keys like `files.ignore` or top-level `organizeImports`

## Coding Conventions

* Prefer very small files with single responsibility
* Keep modules cleanly separated by domain concern
* Comments are allowed when they clarify intent, but avoid noisy or obvious comments
* Avoid large utility dumping grounds and large index files that hide too much logic
* Favor descriptive names over short clever names
* Start with domain-first design and keep framework details outside the domain package where possible

## Working Conventions

* When suggesting file changes, always state clearly whether the user should apply a **full file replacement** or a **partial edit/update**
* When files are added or removed, update the file tree in this brain document
* When major product or design decisions are made, record them in this brain document

## Implemented Domain Slice

### Leader Foundation Files Added

Implemented so far in `packages/domain/src/leaders/`:

```text
packages/domain/src/leaders/
  identity/
    leader-id.ts
    leader-identity.spec.ts
    leader-name.spec.ts
    leader-name.ts
    player-id.ts

  stats/
    leader-starting-stats.spec.ts
    leader-starting-stats.ts
    stat-points.spec.ts
    stat-points.ts

  lifecycle/
    archived-at.ts
    leader-archive-state.spec.ts
    leader-archive-state.ts

  progression/
    leader-bracket.ts
    leader-level.ts
    leader-progression.spec.ts
    leader-xp.ts
```

Still planned but **not yet implemented**:

```text
packages/domain/src/leaders/
  create/
    create-leader.command.ts
    create-leader.result.ts
    create-leader.ts
    create-leader.spec.ts

  stats/
    leader-stats.spec.ts
    leader-stats.ts

  leader.entity.ts
```

## First Planned Domain Slice

### Leader Creation Slice

Planned initial file tree for the first real Arena backend slice in `packages/domain`:

```text
packages/domain/src/leaders/
  create/
    create-leader.command.ts
    create-leader.result.ts
    create-leader.ts
    create-leader.spec.ts

  stats/
    leader-stats.spec.ts
    leader-stats.ts
    leader-starting-stats.ts
    stat-points.ts

  progression/
    leader-bracket.ts
    leader-level.ts
    leader-progression.spec.ts
    leader-xp.ts

  identity/
    leader-id.ts
    leader-identity.spec.ts
    leader-name.ts
    player-id.ts

  lifecycle/
    archived-at.ts
    leader-archive-state.spec.ts
    leader-archive-state.ts

  leader.entity.ts
  index.ts
```

Design note:

* Keep files very small and single-purpose
* Separate identity, stats, progression, lifecycle, and creation concerns instead of collapsing them into one large leader model folder
* Lifecycle is included from the first slice and is not deferred

## Domain Slice Progress

### Implemented so far

```text
packages/domain/src/leaders/
  identity/
    leader-id.ts
    leader-identity.spec.ts
    leader-name.spec.ts
    leader-name.ts
    player-id.ts

  lifecycle/
    archived-at.ts
    leader-archive-state.spec.ts
    leader-archive-state.ts

  progression/
    leader-bracket.ts
    leader-level.ts
    leader-progression.spec.ts
    leader-xp.ts

  stats/
    leader-starting-stats.spec.ts
    leader-starting-stats.ts
    leader-stats.spec.ts
    leader-stats.ts
    stat-points.spec.ts
    stat-points.ts
```

### Next planned files

```text
packages/domain/src/leaders/
  create/
    create-leader.command.ts
    create-leader.result.ts
    create-leader.ts
    create-leader.spec.ts
```

### Next implementation focus

* Build the first real use case: leader creation
* Keep the use case thin and compose existing value objects/entity helpers instead of duplicating rules
* Enforce `leader name must be unique per player` inside the use case via an injected existing-name check dependency
* Use a success/failure result object instead of throwing for expected business-rule failures
* Enforce the active leader cap in the use case via a configurable `maxActiveLeadersPerPlayer` policy rather than hardcoding `5`
* `create-leader` creates the default initial leader state:

  * hp = 2
  * str/dex/lck/crt = 0
  * unspentStatPoints = 3
  * gold = 200
* Spending the 3 free starting stat points is a separate action after leader creation
* Introduce a **tribe/lineage** concept between player and leader:

  * a player can own multiple tribes in standalone Arena
  * each tribe has its own economy and gear pool
  * a leader belongs to exactly one tribe
  * on death/retirement, the next leader in that tribe can inherit that tribe's gear/economy according to the transfer rules

## Repo Scaffold Status

* Initial monorepo scaffold has been created in code form
* Workspace root, API app, Web app, shared packages, infra folder, and GitHub Actions CI skeleton now exist
* Next implementation focus should start inside `apps/api` and `packages/domain`

### Initial File Tree Snapshot

```text
osmodian-arena/
  .github/workflows/ci.yml
  .gitignore
  apps/
    api/
      src/
        main.ts
        modules/
          app.module.ts
          health/
            health.controller.ts
            health.module.ts
      test/
        health.controller.spec.ts
    web/
      src/
        main.tsx
        ui/
          app.tsx
          app.spec.tsx
      vite.config.ts
  packages/
    domain/
      src/
        index.ts
        shared/
          project-version.ts
      test/
        project-version.spec.ts
    contracts/
      src/
        health/
          health-response.schema.ts
        index.ts
    config/
    test-utils/
      src/
        index.ts
  infra/
    docker/
      docker-compose.yml
    db/
    scripts/
  docs/
    brain/
  biome.json
  package.json
  pnpm-workspace.yaml
  tsconfig.base.json
  turbo.json
```

### Repo Hygiene Note

* If accidental emitted `.js` or `.map` files appear inside source or test folders, delete them and keep only the TypeScript source files in the repo tree
* Do not track `.turbo/` cache or task log artifacts in git

## Current Todo List

* [x] Define Stone Age-only scope
* [x] Define MVP build order
* [x] Define Arena as first MVP
* [x] Define permanent death as a core pillar
* [x] Define standalone Arena death-retention rules
* [x] Define tournament high-level format
* [x] Define Arena high-level combat model
* [x] Define Arena core stat responsibilities
* [ ] Define Arena exact timer formula
* [ ] Define Arena exact initiative formula
* [ ] Define Arena exact roll-resolution formulas
* [ ] Define Arena crit formula and crit cap
* [ ] Define Arena damage and mitigation model
* [ ] Define Arena dodge, shield block, defense selection, and bleedthrough formulas
* [ ] Define future parry placeholder rules
* [ ] Define Arena crit interaction with defense results
* [ ] Define Arena stat scaling curves, per-level stat point grants, and respec rules
* [ ] Define Arena gear model, inventory rules, scarcity rules, and per-slot identity rules
* [ ] Revisit durability, repair, and destruction pacing post-MVP
* [ ] Define Arena monster fight structure, bracket monster pools, and reward scaling
* [ ] Define Arena PvP challenge-board rules, acceptance flow, wager limits, and anti-abuse safeguards
* [ ] Thoroughly investigate anti-cheat and anti-abuse options for challenge board, wagers, collusion, alts, and feeding
* [ ] Define fixed boss progression, activation rules, and failure pacing per bracket
* [ ] Define monetization guardrails, especially around standalone respecs, timers, rerolls, and bracket fairness
* [ ] Propose repo structure and tech architecture
* [ ] Create repo and start implementation
* [ ] Rename Arena currency so it does not conflict with future in-world gold resource

## File Tree

See **Initial File Tree Snapshot** and **First Planned Domain Slice** above. Keep `.gitignore` in the root file tree and never track `.turbo/` artifacts.
