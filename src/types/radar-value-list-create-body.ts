import {
  External$RadarValueListCreateBodyMetadata,
  RadarValueListCreateBodyMetadata,
  Schemas$RadarValueListCreateBodyMetadata,
} from "./radar-value-list-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RadarValueListCreateBody
 */
export type RadarValueListCreateBody = {
  /**
   * The name of the value list for use in rules.
   */
  alias: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Type of the items in the value list. One of `card_fingerprint`, `us_bank_account_fingerprint`, `sepa_debit_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, or `customer_id`. Use `string` if the item type is unknown or mixed.
   */
  itemType?:
    | (
        | "card_bin"
        | "card_fingerprint"
        | "case_sensitive_string"
        | "country"
        | "customer_id"
        | "email"
        | "ip_address"
        | "sepa_debit_fingerprint"
        | "string"
        | "us_bank_account_fingerprint"
      )
    | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: RadarValueListCreateBodyMetadata | undefined;
  /**
   * The human-readable name of the value list.
   */
  name: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | (
        | (
            | "card_bin"
            | "card_fingerprint"
            | "case_sensitive_string"
            | "country"
            | "customer_id"
            | "email"
            | "ip_address"
            | "sepa_debit_fingerprint"
            | "string"
            | "us_bank_account_fingerprint"
          )
        | undefined
      )
    | (RadarValueListCreateBodyMetadata | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * RadarValueListCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarValueListCreateBody = {
  alias: string;
  expand?: string[] | undefined;
  item_type?:
    | (
        | "card_bin"
        | "card_fingerprint"
        | "case_sensitive_string"
        | "country"
        | "customer_id"
        | "email"
        | "ip_address"
        | "sepa_debit_fingerprint"
        | "string"
        | "us_bank_account_fingerprint"
      )
    | undefined;
  metadata?: External$RadarValueListCreateBodyMetadata | undefined;
  name: string;

  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | (
        | (
            | "card_bin"
            | "card_fingerprint"
            | "case_sensitive_string"
            | "country"
            | "customer_id"
            | "email"
            | "ip_address"
            | "sepa_debit_fingerprint"
            | "string"
            | "us_bank_account_fingerprint"
          )
        | undefined
      )
    | (External$RadarValueListCreateBodyMetadata | undefined)
    | string
    | External$RadarValueListCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarValueListCreateBody
 */
const SchemaIn$RadarValueListCreateBody: z.ZodType<
  RadarValueListCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alias: z.string(),
    expand: z.array(z.string()).optional(),
    item_type: z
      .enum([
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
      ])
      .optional(),
    metadata: Schemas$RadarValueListCreateBodyMetadata.in.optional(),
    name: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      expand: "expand",
      item_type: "itemType",
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarValueListCreateBody
 */
const SchemaOut$RadarValueListCreateBody: z.ZodType<
  External$RadarValueListCreateBody, // output type of this zod object
  z.ZodTypeDef,
  RadarValueListCreateBody // the object to be transformed
> = z
  .object({
    alias: z.string(),
    expand: z.array(z.string()).optional(),
    itemType: z
      .enum([
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
      ])
      .optional(),
    metadata: Schemas$RadarValueListCreateBodyMetadata.out.optional(),
    name: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      expand: "expand",
      itemType: "item_type",
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$RadarValueListCreateBody = {
  in: SchemaIn$RadarValueListCreateBody,
  out: SchemaOut$RadarValueListCreateBody,
};
