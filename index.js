
'use strict' 

const express = require('express')
const bodyParser = require('body-parser')
const app = express()



app.set('port', (process.env.PORT || 5000))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

const instant_savings_br = {"broadReachOffers":[{"couponNumber":131,"campaignNumber":649,"offerNumber":1019694,"couponMarketingNumber":9999000000131,"startDate":"2015-10-23.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH ALL MEMBERS WITH ADDON","offerTypeCode":3,"offerTypeDescription":"Buy X Get $Z off Y","couponValue":1,"maxRedemptionCount":9999,"minimumBasketAmount":0,"maxDiscountAmount":0,"merchandiseDetails":{"itemDetails":[{"itemNumber":2726,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1},{"itemNumber":15016,"itemTypeCode":2,"itemTypeDescription":"Seed","minimumPurchaseQuantity":1},{"itemNumber":627767,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1},{"itemNumber":980000002,"itemTypeCode":2,"itemTypeDescription":"Seed","minimumPurchaseQuantity":1},{"itemNumber":980008732,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1},{"itemNumber":980064919,"itemTypeCode":2,"itemTypeDescription":"Seed","minimumPurchaseQuantity":1}]}},{"couponNumber":63602,"campaignNumber":1317,"offerNumber":1025552,"couponMarketingNumber":9999000063602,"startDate":"2017-09-07.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH ALL MEMBERS WITH ADDON","offerTypeCode":1,"offerTypeDescription":"OR $ off","couponValue":2,"maxRedemptionCount":9999,"minimumBasketAmount":0,"maxDiscountAmount":0,"minimumCorePurchaseQuantity":1,"merchandiseDetails":{"itemDetails":[{"itemNumber":37226,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1},{"itemNumber":584876,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1},{"itemNumber":638927,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":2},{"itemNumber":467965,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1}]}},{"couponNumber":65754,"campaignNumber":1199,"offerNumber":1028488,"couponMarketingNumber":9999000065754,"startDate":"2016-12-20.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH ALL MEMBERS WITH ADDON","offerTypeCode":1,"offerTypeDescription":"OR $ off","couponValue":1,"maxRedemptionCount":9999,"minimumBasketAmount":0,"maxDiscountAmount":0,"minimumCorePurchaseQuantity":1,"merchandiseDetails":{"itemDetails":[{"itemNumber":7991,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1},{"itemNumber":70101,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1},{"itemNumber":357778,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1},{"itemNumber":367021,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1},{"itemNumber":998598,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1}]}},{"couponNumber":68996,"campaignNumber":1428,"offerNumber":1032354,"couponMarketingNumber":9999000068996,"startDate":"2017-07-21.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH ALL MEMBERS WITH ADDON","offerTypeCode":4,"offerTypeDescription":"Buy X Get %Z off Y","couponValue":99.99,"maxRedemptionCount":9999,"minimumBasketAmount":0,"maxDiscountAmount":0,"minimumSeedPurchaseQuantity":1,"minimumRewardPurchaseQuantity":1,"merchandiseDetails":{"itemDetails":[{"itemNumber":66846,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1},{"itemNumber":229575,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1},{"itemNumber":495359,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1},{"itemNumber":859370,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1},{"itemNumber":959780,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1},{"itemNumber":980000002,"itemTypeCode":2,"itemTypeDescription":"Seed","minimumPurchaseQuantity":1},{"itemNumber":980058602,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1}]}},{"couponNumber":69113,"campaignNumber":1413,"offerNumber":1032160,"couponMarketingNumber":9999000069113,"startDate":"2017-07-03.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH ALL MEMBERS WITH ADDON","offerTypeCode":2,"offerTypeDescription":"OR % OFF","couponValue":10,"maxRedemptionCount":9999,"minimumBasketAmount":0,"maxDiscountAmount":0,"minimumCorePurchaseQuantity":1,"merchandiseDetails":{"itemDetails":[{"itemNumber":561914,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1}]}},{"couponNumber":70211,"campaignNumber":1383,"offerNumber":1032293,"couponMarketingNumber":9999000070211,"startDate":"2017-09-25.00.00.00.000000","endDate":"2017-10-23.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH BUSINESS BASE WITH ADDON","offerTypeCode":3,"offerTypeDescription":"Buy X Get $Z off Y","couponValue":20,"maxRedemptionCount":10,"minimumBasketAmount":0,"maxDiscountAmount":0,"minimumSeedPurchaseQuantity":5,"minimumRewardPurchaseQuantity":1,"merchandiseDetails":{"itemDetails":[{"itemNumber":545057,"itemTypeCode":2,"itemTypeDescription":"Seed","minimumPurchaseQuantity":5},{"itemNumber":545057,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1}],"categoryDetails3":[],"subCategoryDetails3":[],"vendorDetails3":[],"brandDetails3":[]}},{"couponNumber":70212,"campaignNumber":1383,"offerNumber":1032294,"couponMarketingNumber":9999000070211,"startDate":"2017-10-11.00.00.00.000000","endDate":"2018-10-23.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH BUSINESS BASE WITH ADDON","offerTypeCode":3,"offerTypeDescription":"Buy X Get $Z off Y","couponValue":25,"maxRedemptionCount":10,"minimumBasketAmount":0,"maxDiscountAmount":0,"minimumSeedPurchaseQuantity":5,"minimumRewardPurchaseQuantity":1,"merchandiseDetails":{"itemDetails":[{"itemNumber":467965,"itemTypeCode":2,"itemTypeDescription":"Seed","minimumPurchaseQuantity":5},{"itemNumber":132310,"itemTypeCode":3,"itemTypeDescription":"Reward","minimumPurchaseQuantity":1}],"categoryDetails3":[],"subCategoryDetails3":[],"vendorDetails3":[],"brandDetails3":[]}},{"couponNumber":70213,"campaignNumber":1318,"offerNumber":1025553,"couponMarketingNumber":9999000063602,"startDate":"2017-10-15.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH ALL MEMBERS WITH ADDON","offerTypeCode":1,"offerTypeDescription":"OR $ off","couponValue":5,"maxRedemptionCount":9999,"minimumBasketAmount":0,"maxDiscountAmount":0,"minimumCorePurchaseQuantity":1,"merchandiseDetails":{"itemDetails":[{"itemNumber":584876,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1}]}},{"couponNumber":70214,"campaignNumber":1319,"offerNumber":1025554,"couponMarketingNumber":9999000063602,"startDate":"2017-10-15.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH ALL MEMBERS WITH ADDON","offerTypeCode":1,"offerTypeDescription":"OR $ off","couponValue":100,"maxRedemptionCount":9999,"minimumBasketAmount":0,"maxDiscountAmount":0,"minimumCorePurchaseQuantity":1,"merchandiseDetails":{"itemDetails":[{"itemNumber":431465,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1}]}},{"couponNumber":70215,"campaignNumber":1320,"offerNumber":1025555,"couponMarketingNumber":9999000063602,"startDate":"2017-10-20.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","packageCode":96,"packageDescription":"BROAD REACH ALL MEMBERS WITH ADDON","offerTypeCode":1,"offerTypeDescription":"OR $ off","couponValue":100,"maxRedemptionCount":9999,"minimumBasketAmount":0,"maxDiscountAmount":0,"minimumCorePurchaseQuantity":1,"merchandiseDetails":{"itemDetails":[{"itemNumber":431465,"itemTypeCode":1,"itemTypeDescription":"Core","minimumPurchaseQuantity":1}]}}]}

const instant_savings_metadata = {"activeOffers":{"InClubOffers":[],"dotcomOffers":[{"couponNumber":131,"startDate":"2015-10-23.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","remainingRedemptionCount":9999},{"couponNumber":63602,"startDate":"2017-09-07.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","remainingRedemptionCount":9999},{"couponNumber":65754,"startDate":"2016-12-20.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","remainingRedemptionCount":9999},{"couponNumber":68996,"startDate":"2017-07-21.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","remainingRedemptionCount":9999},{"couponNumber":69113,"startDate":"2017-07-03.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","remainingRedemptionCount":9999},{"couponNumber":70211,"startDate":"2017-09-25.00.00.00.000000","endDate":"2017-10-23.23.59.00.000000","remainingRedemptionCount":9999},{"couponNumber":70212,"startDate":"2017-10-11.00.00.00.000000","endDate":"2018-10-23.23.59.00.000000","remainingRedemptionCount":9999},{"couponNumber":70213,"startDate":"2017-10-15.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","remainingRedemptionCount":9999},{"couponNumber":70214,"startDate":"2017-10-15.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","remainingRedemptionCount":9999},{"couponNumber":70215,"startDate":"2017-10-20.00.00.00.000000","endDate":"2018-12-31.23.59.00.000000","remainingRedemptionCount":9999}],"mobileOffers":[]}}

const wpa_data = { "moduleData": { "adUuid": "09fe4c6d-e766-4ede-9d83-56fd3397a2c0", "pageBeacons": { "hl": "//b.hlserve.com/beacon?hl_qs=OZMwJ66hcmeUU0i9CCG16MpXz6sMSckUWA0QpgaBZSrWNqFzQnftqDM4KRiO6VfvgvX%2bWdgq5", "wpa": "//wrd.walmart.com/beacon?hl_qs=OZMwJ66hcmeUU0i9CCG16MpXz6sMSckUWA0QpgaBZSrWNqFzQnftqDM4KRiO6VfvgvX%2bWdgq5" }, "modAuxInfo": "__mod_aux_info__" }, "adItems": [{ "itemId": "11979965", "wpaQs": "d-y7xGO8VxBsEeVk_ZKOqDfDEnT9Q-k_OI9yfkyWBoiahZwV3bGcv4g_0ytudSOW3uJElfU9zo1gFQ5pud9ck1wumIY0N6nxW5Pg2FG7yTo", "impBeacons": { "hl": "//b.hlserve.com/beacon?hl_qs=OZMwJ66hcmeUU0i9CCG16MpXz6sMSckUWA0QpgaBZSrWNqFzQnftqDM4KRiO6VfvgvX%2bWdgq5", "wpa": "//wrd.walmart.com/beacon?hl_qs=OZMwJ66hcmeUU0i9CCG16MpXz6sMSckUWA0QpgaBZSrWNqFzQnftqDM4KRiO6VfvgvX%2bWdgq5" }, "clickBeacon": "//wrd.walmart.com/track?rd=0&qs=k_OI9yfkyWBoiahZwV3bGcv4g_0ytudSOW3uJElfU9zo1gFQ5pud9ck1wumIY0N6nxW5Pg2FG7yTo&adUid=__adUid__&creative=__creative__&pageguid=__pageguid__&pid=__pid__&platform=__pfm__&plmt=__plmt__&puserid=__puserid__&searchterms=__searchterms__&tax=__tax__", "adAuxInfo": "__ad_aux_info__" }, { "itemId": "585199970", "wpaQs": "nU2AT4HvqaTiUjEJT6rtj6_MdKvjaApvheFequ7ppjvuVhS5_50vmUiTv9PqpTjq_8FMXDMOQ8M8KQYwF1gIRA", "impBeacons": { "hl": "//b.hlserve.com/beacon?hl_qs=OZMwJ66hcmeUU0i9CCG16MpXz6sMSckUWA0QpgaBZSrWNqFzQnftqDM4KRiO6VfvgvX%2bWdgq5", "wpa": "//wrd.walmart.com/beacon?hl_qs=OZMwJ66hcmeUU0i9CCG16MpXz6sMSckUWA0QpgaBZSrWNqFzQnftqDM4KRiO6VfvgvX%2bWdgq5" }, "clickBeacon": "//wrd.walmart.com/track?rd=0&qs=k_OI9yfkyWBoiahZwV3bGcv4g_0ytudSOW3uJElfU9zo1gFQ5pud9ck1wumIY0N6nxW5Pg2FG7yTo&adUid=__adUid__&creative=__creative__&pageguid=__pageguid__&pid=__pid__&platform=__pfm__&plmt=__plmt__&puserid=__puserid__&searchterms=__searchterms__&tax=__tax__", "adAuxInfo": "__ad_aux_info__" }, { "itemId": "14940646", "wpaQs": "EBnNYb6-y7hCeyhH4p69NcEuPKFZxsht7BQiWRZSjl28dqTe7ZixunDntlkWnadrinAByqv69GqENKaA-yd1KVwumIY0N6nxW5Pg2FG7yTo", "impBeacons": { "hl": "//b.hlserve.com/beacon?hl_qs=OZMwJ66hcmeUU0i9CCG16MpXz6sMSckUWA0QpgaBZSrWNqFzQnftqDM4KRiO6VfvgvX%2bWdgq5", "wpa": "//wrd.walmart.com/beacon?hl_qs=OZMwJ66hcmeUU0i9CCG16MpXz6sMSckUWA0QpgaBZSrWNqFzQnftqDM4KRiO6VfvgvX%2bWdgq5" }, "clickBeacon": "//wrd.walmart.com/track?rd=0&qs=k_OI9yfkyWBoiahZwV3bGcv4g_0ytudSOW3uJElfU9zo1gFQ5pud9ck1wumIY0N6nxW5Pg2FG7yTo&adUid=__adUid__&creative=__creative__&pageguid=__pageguid__&pid=__pid__&platform=__pfm__&plmt=__plmt__&puserid=__puserid__&searchterms=__searchterms__&tax=__tax__", "adAuxInfo": "__ad_aux_info__" }] }

app.get('/', function (req, res) {
	res.send("success");
})

// for broad reach
app.get('/rest/InstantSavings/MetaDataFile/Broadreach', function (req, res) {
	res.json(instant_savings_br);
})

app.get('/rest/InstantSavings/MetaDataLookup/Club/6279', function(req, res){
	res.json(instant_savings_metadata);
})

// for broad reach
app.get('/rest/InstantSavings/MetaDataFile/All', function (req, res) {
	res.json(instant_savings_br);
})

// for analytic
app.get('/rest/InstantSavings/MetaDataFile/Analytic', function (req, res) {
	res.json(instant_savings_br);
})

// for triggers
app.get('/rest/InstantSavings/MetaDataFile/Triggers', function (req, res) {
	res.json(instant_savings_br);
})

// for package
app.get('/rest/InstantSavings/MetaDataFile/Package', function (req, res) {
	res.json(instant_savings_br);
})

// for triggers
app.get('/rest/wpa/ads', function (req, res) {
	res.json(wpa_data);
})

// spin spin sugar
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})
