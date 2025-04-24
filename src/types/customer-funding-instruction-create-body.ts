import {
  CustomerFundingInstructionCreateBodyBankTransfer,
  External$CustomerFundingInstructionCreateBodyBankTransfer,
  Schemas$CustomerFundingInstructionCreateBodyBankTransfer,
} from "./customer-funding-instruction-create-body-bank-transfer";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerFundingInstructionCreateBody
 */
export type CustomerFundingInstructionCreateBody = {
  /**
   * Additional parameters for `bank_transfer` funding types
   */
  bankTransfer: CustomerFundingInstructionCreateBodyBankTransfer;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The `funding_type` to get the instructions for.
   */
  fundingType: "bank_transfer";

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | CustomerFundingInstructionCreateBodyBankTransfer
    | string
    | (string[] | undefined)
    | "bank_transfer"
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerFundingInstructionCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerFundingInstructionCreateBody = {
  bank_transfer: External$CustomerFundingInstructionCreateBodyBankTransfer;
  currency: string;
  expand?: string[] | undefined;
  funding_type: "bank_transfer";

  [additionalProperty: string]:
    | External$CustomerFundingInstructionCreateBodyBankTransfer
    | string
    | (string[] | undefined)
    | "bank_transfer"
    | External$CustomerFundingInstructionCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerFundingInstructionCreateBody
 */
const SchemaIn$CustomerFundingInstructionCreateBody: z.ZodType<
  CustomerFundingInstructionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer: Schemas$CustomerFundingInstructionCreateBodyBankTransfer.in,
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    funding_type: z.enum(["bank_transfer"]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      bank_transfer: "bankTransfer",
      currency: "currency",
      expand: "expand",
      funding_type: "fundingType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerFundingInstructionCreateBody
 */
const SchemaOut$CustomerFundingInstructionCreateBody: z.ZodType<
  External$CustomerFundingInstructionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerFundingInstructionCreateBody // the object to be transformed
> = z
  .object({
    bankTransfer: Schemas$CustomerFundingInstructionCreateBodyBankTransfer.out,
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    fundingType: z.enum(["bank_transfer"]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      currency: "currency",
      expand: "expand",
      fundingType: "funding_type",
    });
  });

export const Schemas$CustomerFundingInstructionCreateBody = {
  in: SchemaIn$CustomerFundingInstructionCreateBody,
  out: SchemaOut$CustomerFundingInstructionCreateBody,
};
