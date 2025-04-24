import {
  External$RadarValueListListItems,
  RadarValueListListItems,
  Schemas$RadarValueListListItems,
} from "./radar-value-list-list-items";
import {
  External$RadarValueListMetadata,
  RadarValueListMetadata,
  Schemas$RadarValueListMetadata,
} from "./radar-value-list-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Value lists allow you to group values together which can then be referenced in rules.
 *
 * Related guide: [Default Stripe lists](https://stripe.com/docs/radar/lists#managing-list-items)
 */
export type RadarValueList = {
  /**
   * The name of the value list for use in rules.
   */
  alias: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The name or email address of the user who created this value list.
   */
  createdBy: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The type of items in the value list. One of `card_fingerprint`, `us_bank_account_fingerprint`, `sepa_debit_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, or `customer_id`.
   */
  itemType:
    | "card_bin"
    | "card_fingerprint"
    | "case_sensitive_string"
    | "country"
    | "customer_id"
    | "email"
    | "ip_address"
    | "sepa_debit_fingerprint"
    | "string"
    | "us_bank_account_fingerprint";
  /**
   * List of items contained within this value list.
   */
  listItems: RadarValueListListItems;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: RadarValueListMetadata;
  /**
   * The name of the value list.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "radar.value_list";
};

/**
 * @internal
 * RadarValueList without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarValueList = {
  alias: string;
  created: number;
  created_by: string;
  id: string;
  item_type:
    | "card_bin"
    | "card_fingerprint"
    | "case_sensitive_string"
    | "country"
    | "customer_id"
    | "email"
    | "ip_address"
    | "sepa_debit_fingerprint"
    | "string"
    | "us_bank_account_fingerprint";
  list_items: External$RadarValueListListItems;
  livemode: boolean;
  metadata: External$RadarValueListMetadata;
  name: string;
  object: "radar.value_list";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarValueList
 */
const SchemaIn$RadarValueList: z.ZodType<
  RadarValueList, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alias: z.string(),
    created: z.number().int(),
    created_by: z.string(),
    id: z.string(),
    item_type: z.enum([
      "card_bin",
      "card_fingerprint",
      "case_sensitive_string",
      "country",
      "customer_id",
      "email",
      "ip_address",
      "sepa_debit_fingerprint",
      "string",
      "us_bank_account_fingerprint",
    ]),
    list_items: Schemas$RadarValueListListItems.in,
    livemode: z.boolean(),
    metadata: Schemas$RadarValueListMetadata.in,
    name: z.string(),
    object: z.enum(["radar.value_list"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      created: "created",
      created_by: "createdBy",
      id: "id",
      item_type: "itemType",
      list_items: "listItems",
      livemode: "livemode",
      metadata: "metadata",
      name: "name",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarValueList
 */
const SchemaOut$RadarValueList: z.ZodType<
  External$RadarValueList, // output type of this zod object
  z.ZodTypeDef,
  RadarValueList // the object to be transformed
> = z
  .object({
    alias: z.string(),
    created: z.number().int(),
    createdBy: z.string(),
    id: z.string(),
    itemType: z.enum([
      "card_bin",
      "card_fingerprint",
      "case_sensitive_string",
      "country",
      "customer_id",
      "email",
      "ip_address",
      "sepa_debit_fingerprint",
      "string",
      "us_bank_account_fingerprint",
    ]),
    listItems: Schemas$RadarValueListListItems.out,
    livemode: z.boolean(),
    metadata: Schemas$RadarValueListMetadata.out,
    name: z.string(),
    object: z.enum(["radar.value_list"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      created: "created",
      createdBy: "created_by",
      id: "id",
      itemType: "item_type",
      listItems: "list_items",
      livemode: "livemode",
      metadata: "metadata",
      name: "name",
      object: "object",
    });
  });

export const Schemas$RadarValueList = {
  in: SchemaIn$RadarValueList,
  out: SchemaOut$RadarValueList,
};
