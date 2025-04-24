import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This hash contains details about the online acceptance.
 */
export type ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline =
  {
    /**
     * The IP address from which the Mandate was accepted by the customer.
     */
    ipAddress?: string | null | undefined;
    /**
     * The user agent of the browser from which the Mandate was accepted by the customer.
     */
    userAgent?: string | null | undefined;
  };

/**
 * @internal
 * ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline =
  {
    ip_address?: string | null | undefined;
    user_agent?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline
 */
const SchemaIn$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline: z.ZodType<
  ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.string().nullable().optional(),
    user_agent: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline
 */
const SchemaOut$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline: z.ZodType<
  External$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline, // output type of this zod object
  z.ZodTypeDef,
  ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline // the object to be transformed
> = z
  .object({
    ipAddress: z.string().nullable().optional(),
    userAgent: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
      userAgent: "user_agent",
    });
  });

export const Schemas$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline =
  {
    in: SchemaIn$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline,
    out: SchemaOut$ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline,
  };
