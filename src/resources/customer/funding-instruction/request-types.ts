import { zodTransform } from "@sideko-inc/stripe/core";
import {
  CustomerFundingInstructionCreateBodyBankTransfer,
  External$CustomerFundingInstructionCreateBodyBankTransfer,
  Schemas$CustomerFundingInstructionCreateBodyBankTransfer,
} from "@sideko-inc/stripe/types/customer-funding-instruction-create-body-bank-transfer";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
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
  customer: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  bank_transfer: External$CustomerFundingInstructionCreateBodyBankTransfer;
  currency: string;
  expand?: string[] | undefined;
  funding_type: "bank_transfer";
  customer: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer: Schemas$CustomerFundingInstructionCreateBodyBankTransfer.in,
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    funding_type: z.enum(["bank_transfer"]),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_transfer: "bankTransfer",
      currency: "currency",
      expand: "expand",
      funding_type: "fundingType",
      customer: "customer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    bankTransfer: Schemas$CustomerFundingInstructionCreateBodyBankTransfer.out,
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    fundingType: z.enum(["bank_transfer"]),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      currency: "currency",
      expand: "expand",
      fundingType: "funding_type",
      customer: "customer",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
