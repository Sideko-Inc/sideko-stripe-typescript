import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  CustomerSessionResourceComponents,
  External$CustomerSessionResourceComponents,
  Schemas$CustomerSessionResourceComponents,
} from "./customer-session-resource-components";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Customer Session allows you to grant Stripe's frontend SDKs (like Stripe.js) client-side access
 * control over a Customer.
 *
 * Related guides: [Customer Session with the Payment Element](/payments/accept-a-payment-deferred?platform=web&type=payment#save-payment-methods),
 * [Customer Session with the Pricing Table](/payments/checkout/pricing-table#customer-session),
 * [Customer Session with the Buy Button](/payment-links/buy-button#pass-an-existing-customer).
 */
export type CustomerSession = {
  /**
   * The client secret of this Customer Session. Used on the client to set up secure access to the given `customer`.
   *
   * The client secret can be used to provide access to `customer` from your frontend. It should not be stored, logged, or exposed to anyone other than the relevant customer. Make sure that you have TLS enabled on any page that includes the client secret.
   */
  clientSecret: string;
  /**
   * Configuration for the components supported by this Customer Session.
   */
  components?: CustomerSessionResourceComponents | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The Customer the Customer Session was created for.
   */
  customer: string | Customer;
  /**
   * The timestamp at which this Customer Session will expire.
   */
  expiresAt: number;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "customer_session";
};

/**
 * @internal
 * CustomerSession without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSession = {
  client_secret: string;
  components?: External$CustomerSessionResourceComponents | undefined;
  created: number;
  customer: string | External$Customer;
  expires_at: number;
  livemode: boolean;
  object: "customer_session";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSession
 */
const SchemaIn$CustomerSession: z.ZodType<
  CustomerSession, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    client_secret: z.string(),
    components: Schemas$CustomerSessionResourceComponents.in.optional(),
    created: z.number().int(),
    customer: z.union([z.string(), z.lazy(() => Schemas$Customer.in)]),
    expires_at: z.number().int(),
    livemode: z.boolean(),
    object: z.enum(["customer_session"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      client_secret: "clientSecret",
      components: "components",
      created: "created",
      customer: "customer",
      expires_at: "expiresAt",
      livemode: "livemode",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSession
 */
const SchemaOut$CustomerSession: z.ZodType<
  External$CustomerSession, // output type of this zod object
  z.ZodTypeDef,
  CustomerSession // the object to be transformed
> = z
  .object({
    clientSecret: z.string(),
    components: Schemas$CustomerSessionResourceComponents.out.optional(),
    created: z.number().int(),
    customer: z.union([z.string(), z.lazy(() => Schemas$Customer.out)]),
    expiresAt: z.number().int(),
    livemode: z.boolean(),
    object: z.enum(["customer_session"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientSecret: "client_secret",
      components: "components",
      created: "created",
      customer: "customer",
      expiresAt: "expires_at",
      livemode: "livemode",
      object: "object",
    });
  });

export const Schemas$CustomerSession = {
  in: SchemaIn$CustomerSession,
  out: SchemaOut$CustomerSession,
};
