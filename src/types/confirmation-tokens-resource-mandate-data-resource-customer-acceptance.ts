import {
  ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline,
  External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline,
  Schemas$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline,
} from "./confirmation-tokens-resource-mandate-data-resource-customer-acceptance-resource-online";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This hash contains details about the customer acceptance of the Mandate.
 */
export type ConfirmationTokensResourceMandateDataResourceCustomerAcceptance = {
  /**
   * This hash contains details about the online acceptance.
   */
  online?:
    | ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline
    | undefined;
  /**
   * The type of customer acceptance information included with the Mandate.
   */
  type: string;
};

/**
 * @internal
 * ConfirmationTokensResourceMandateDataResourceCustomerAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance =
  {
    online?:
      | External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline
      | undefined;
    type: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmationTokensResourceMandateDataResourceCustomerAcceptance
 */
const SchemaIn$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance: z.ZodType<
  ConfirmationTokensResourceMandateDataResourceCustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    online:
      Schemas$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline.in.optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      online: "online",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance
 */
const SchemaOut$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance: z.ZodType<
  External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  ConfirmationTokensResourceMandateDataResourceCustomerAcceptance // the object to be transformed
> = z
  .object({
    online:
      Schemas$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline.out.optional(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      online: "online",
      type: "type",
    });
  });

export const Schemas$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance =
  {
    in: SchemaIn$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance,
    out: SchemaOut$ConfirmationTokensResourceMandateDataResourceCustomerAcceptance,
  };
