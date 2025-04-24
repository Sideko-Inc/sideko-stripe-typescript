import {
  ConfirmationTokensResourceMandateDataResourceCustomerAcceptance,
  External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance,
  Schemas$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance,
} from "./confirmation-tokens-resource-mandate-data-resource-customer-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Data used for generating a Mandate.
 */
export type ConfirmationTokensResourceMandateData = {
  /**
   * This hash contains details about the customer acceptance of the Mandate.
   */
  customerAcceptance: ConfirmationTokensResourceMandateDataResourceCustomerAcceptance;
};

/**
 * @internal
 * ConfirmationTokensResourceMandateData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmationTokensResourceMandateData = {
  customer_acceptance: External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmationTokensResourceMandateData
 */
const SchemaIn$ConfirmationTokensResourceMandateData: z.ZodType<
  ConfirmationTokensResourceMandateData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_acceptance:
      Schemas$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_acceptance: "customerAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmationTokensResourceMandateData
 */
const SchemaOut$ConfirmationTokensResourceMandateData: z.ZodType<
  External$ConfirmationTokensResourceMandateData, // output type of this zod object
  z.ZodTypeDef,
  ConfirmationTokensResourceMandateData // the object to be transformed
> = z
  .object({
    customerAcceptance:
      Schemas$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerAcceptance: "customer_acceptance",
    });
  });

export const Schemas$ConfirmationTokensResourceMandateData = {
  in: SchemaIn$ConfirmationTokensResourceMandateData,
  out: SchemaOut$ConfirmationTokensResourceMandateData,
};
