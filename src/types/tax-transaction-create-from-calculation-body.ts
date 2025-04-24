import {
  External$TaxTransactionCreateFromCalculationBodyMetadata,
  Schemas$TaxTransactionCreateFromCalculationBodyMetadata,
  TaxTransactionCreateFromCalculationBodyMetadata,
} from "./tax-transaction-create-from-calculation-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxTransactionCreateFromCalculationBody
 */
export type TaxTransactionCreateFromCalculationBody = {
  /**
   * Tax Calculation ID to be used as input when creating the transaction.
   */
  calculation: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TaxTransactionCreateFromCalculationBodyMetadata | undefined;
  /**
   * The Unix timestamp representing when the tax liability is assumed or reduced, which determines the liability posting period and handling in tax liability reports. The timestamp must fall within the `tax_date` and the current time, unless the `tax_date` is scheduled in advance. Defaults to the current time.
   */
  postedAt?: number | undefined;
  /**
   * A custom order or sale identifier, such as 'myOrder_123'. Must be unique across all transactions, including reversals.
   */
  reference: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | (TaxTransactionCreateFromCalculationBodyMetadata | undefined)
    | (number | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TaxTransactionCreateFromCalculationBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxTransactionCreateFromCalculationBody = {
  calculation: string;
  expand?: string[] | undefined;
  metadata?:
    | External$TaxTransactionCreateFromCalculationBodyMetadata
    | undefined;
  posted_at?: number | undefined;
  reference: string;

  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | (External$TaxTransactionCreateFromCalculationBodyMetadata | undefined)
    | (number | undefined)
    | string
    | External$TaxTransactionCreateFromCalculationBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxTransactionCreateFromCalculationBody
 */
const SchemaIn$TaxTransactionCreateFromCalculationBody: z.ZodType<
  TaxTransactionCreateFromCalculationBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    calculation: z.string(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$TaxTransactionCreateFromCalculationBodyMetadata.in.optional(),
    posted_at: z.number().int().optional(),
    reference: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      calculation: "calculation",
      expand: "expand",
      metadata: "metadata",
      posted_at: "postedAt",
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxTransactionCreateFromCalculationBody
 */
const SchemaOut$TaxTransactionCreateFromCalculationBody: z.ZodType<
  External$TaxTransactionCreateFromCalculationBody, // output type of this zod object
  z.ZodTypeDef,
  TaxTransactionCreateFromCalculationBody // the object to be transformed
> = z
  .object({
    calculation: z.string(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$TaxTransactionCreateFromCalculationBodyMetadata.out.optional(),
    postedAt: z.number().int().optional(),
    reference: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      calculation: "calculation",
      expand: "expand",
      metadata: "metadata",
      postedAt: "posted_at",
      reference: "reference",
    });
  });

export const Schemas$TaxTransactionCreateFromCalculationBody = {
  in: SchemaIn$TaxTransactionCreateFromCalculationBody,
  out: SchemaOut$TaxTransactionCreateFromCalculationBody,
};
